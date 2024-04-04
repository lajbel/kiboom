import type {
    Anchor,
    AnchorComp,
    KaboomCtx,
    PosComp,
    RotateComp,
    Vec2,
    ZComp,
} from "kaboom";
import { makeBaseMaker } from "../factory/makeBaseMaker";

export interface ObjOpt {
    pos?: Vec2;
    anchor?: Anchor | Vec2;
    rotate?: number;
    z?: number;
    tags?: string[];
    states?: string[] | null;
}

export type BaseComps = PosComp | AnchorComp | RotateComp | ZComp;

const defaultOptions = (k: KaboomCtx) => ({
    pos: k.vec2(0, 0),
    anchor: "center",
    rotate: 0,
    z: 0,
    tags: [] as string[],
}) satisfies ObjOpt;

export const makeBase = makeBaseMaker(defaultOptions, (opt, k) => [
    k.pos(opt.pos),
    k.anchor(opt.anchor),
    k.rotate(opt.rotate),
    k.z(opt.z),
    ...opt.tags,
    opt.states?.length > 0 ? k.state(opt.states[0], opt.states) : "",
]);

const myObj = makeBase({
    
})