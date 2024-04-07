import { ColorComp, KaboomCtx, OpacityComp, ScaleComp, Vec2 } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { makeBase } from "./makeBase";

/**
 * The options of the render object
 *
 * @group Options
 */
export type RenderOpt = {
    color: string;
    opacity: number;
    scale: Vec2;
};

export type RenderComps = ColorComp | OpacityComp | ScaleComp;

const defaultOpt = (k: KaboomCtx): RenderOpt => ({
    color: "#ffffff",
    opacity: 1,
    scale: k.vec2(1),
});

export const makeRender = makeMaker(makeBase, defaultOpt, (opt, k) => [
    k.color(k.Color.fromHex(opt.color)),
    k.opacity(opt.opacity),
    k.scale(opt.scale),
]);
