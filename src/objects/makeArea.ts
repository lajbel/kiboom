import type { KaboomCtx, Vec2 } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { makeBase } from "./makeBase";

export interface AreaOpt {
    size?: Vec2;
}

const defaultOpt = (k: KaboomCtx): AreaOpt => ({
    size: k.vec2(0),
});

export const makeArea = makeMaker(makeBase, defaultOpt, (opt, k) => [
    k.area({
        shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y),
    }),
]);
