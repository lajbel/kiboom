import { KaboomCtx, Vec2 } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { makeBase } from "./makeBase";

export type RenderOpt = {
    color?: string;
    opacity?: number;
    scale?: Vec2;
};

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
