import type { KaboomCtx, Vec2 } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { makeBase } from "./makeBase";

/**
 * The options of the area object
 *
 * @group Options
 */
export type AreaOpt = {
    size: Vec2;
};

const defaultOpt = (k: KaboomCtx): AreaOpt => ({
    size: k.vec2(32, 32),
});

/**
 * Make an area object.
 */
export const makeArea = makeMaker(makeBase, defaultOpt, (opt, k) => [
    k.area({
        shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y),
    }),
]);
