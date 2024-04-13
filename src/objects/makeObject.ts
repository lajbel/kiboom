import type {
    Anchor,
    AnchorComp,
    CompList,
    PosComp,
    RotateComp,
    StateComp,
    Vec2,
    ZComp,
} from "kaboom";
import { makeMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";

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
};

/** The components of the base object */
export type BaseComps = PosComp | AnchorComp | RotateComp | ZComp | StateComp;

export const objectOpt = makeOptions<ObjOpt>((k) => ({
    pos: k.vec2(k.center()),
    anchor: "center",
    rotate: 0,
    z: 0,
    tags: [],
}));

export const makeObject = makeMaker(objectOpt, (opt, k) => {
    return [
        k.pos(opt.pos),
        k.anchor(opt.anchor),
        k.rotate(opt.rotate),
        k.z(opt.z),
        ...opt.tags,
    ] as CompList<BaseComps>;
});
