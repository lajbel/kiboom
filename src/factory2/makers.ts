import { Anchor, CompList, GameObj, KaboomCtx, Vec2 } from "kaboom";
import { getK } from "../plugin";
import { FlipOptional } from "../utils/types";
import { use } from "../utils/use";
import { extendOptions, makeOptions, mergeOptions } from "./options";

type MakerFN<TOpt, TComps> = (
    opt: TOpt,
) => GameObj<TComps>;

export const makeMaker = <
    TComps,
    TOpt,
>(
    defaultOpt: (k: KaboomCtx) => TOpt,
    componentsApply: (
        opt: Required<TOpt>,
        k: KaboomCtx,
    ) => CompList<TComps>,
): MakerFN<FlipOptional<TOpt>, TComps> => {
    return (opt) => {
        const k = getK<KaboomCtx>();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TOpt>,
        ) => {
            const comps = componentsApply?.(opt, k);
            return use(obj, comps);
        };

        const requiredOpt = mergeOptions(defaultOpt(k), opt);
        const baseObj = k.make();
        const newObj = applyNewComponents(baseObj, requiredOpt);

        return newObj;
    };
};

export const extendMaker = <
    TBaseComps,
    TNewComps,
    TOpt,
>(
    baseMaker: (opt: TOpt) => GameObj<TBaseComps>,
    defaultOpt: (k: KaboomCtx) => TOpt,
    componentsApply: (
        opt: Required<TOpt>,
        k: KaboomCtx,
    ) => CompList<TNewComps>,
): MakerFN<FlipOptional<TOpt>, TBaseComps & TNewComps> => {
    return (opt) => {
        const k = getK<KaboomCtx>();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TOpt>,
        ) => {
            const comps = componentsApply?.(opt, k);
            return use(obj, comps);
        };

        const baseOpt = defaultOpt(k);
        const requiredOpt = mergeOptions(baseOpt, opt);

        const baseObj = baseMaker(requiredOpt);
        const newObj = applyNewComponents(baseObj, requiredOpt);

        return newObj;
    };
};

// TODO: Delete this
// ! This is an example of how an makeObject will be
type ObjOpt = {
    /** Position of the object */
    pos?: Vec2;
    /** Anchor point of the object */
    anchor?: Anchor | Vec2;
    /** The rotation of the object */
    rotate?: number;
    /** The z index of the object */
    z?: number;
    /** Tags of the object */
    tags?: string[];
};

const objectOpt = makeOptions<ObjOpt>((k) => ({
    pos: k.vec2(k.center()),
    anchor: "center",
    rotate: 0,
    z: 0,
    tags: [],
}));

const makeObject = makeMaker(objectOpt, (opt, k) => [
    k.pos(opt.pos),
    k.anchor(opt.anchor),
    k.rotate(opt.rotate),
    k.z(opt.z),
    ...opt.tags,
]);

const x = makeObject({});

// ! This is an example of how an makeArea will be
/**
 * The options of the area object
 *
 * @group Options
 */
export type AreaOpt = {
    size: Vec2;
};

const areaOpt = extendOptions<AreaOpt, ObjOpt>(objectOpt, (k) => ({}));

/**
 * Make an area object.
 */
export const makeArea = extendMaker(makeObject, areaOpt, (opt, k) => [
    k.area({
        shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y),
    }),
]);
