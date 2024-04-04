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

export interface ObjOpt {
    pos?: Vec2;
    anchor?: Anchor | Vec2;
    rotate?: number;
    z?: number;
    tags?: string[];
    states?: string[] | null;
}

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

const myObj = makeBase({});
