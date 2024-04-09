import type {
    Anchor,
    AnchorComp,
    KaboomCtx,
    PosComp,
    RotateComp,
    StateComp,
    Vec2,
    ZComp,
} from "kaboom";
import { makeBaseMaker } from "../factory/makeBaseMaker";

/**
 * The base options of all object makers
 *
 * @group Options
 */
export type ObjOpt = {
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
    /** The states of the object */
    states?: string[] | null;
};

/** The components of the base object */
export type BaseComps = PosComp | AnchorComp | RotateComp | ZComp | StateComp;

const defaultOptions = (k: KaboomCtx) =>
    ({
        pos: k.vec2(0, 0),
        anchor: "center",
        rotate: 0,
        z: 0,
        tags: [] as string[],
        states: null as string[] | null,
    }) as const;

/**
 * Make a base object, this base object has many components
 */
export const makeBase = makeBaseMaker<ObjOpt, BaseComps>(
    defaultOptions,
    (opt, k) => {
        return [
            k.pos(opt.pos),
            k.anchor(opt.anchor),
            k.rotate(opt.rotate),
            k.z(opt.z),
            ...opt.tags, // tag strings
            opt.states?.length ?? 0 > 0
                ? k.state(opt.states?.[0]!, opt.states!)
                : "",
        ];
    },
);
