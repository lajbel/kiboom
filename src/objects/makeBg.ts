import type * as Kaboom from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { ObjOpt } from "./makeBase";
import { makeRender, RenderOpt } from "./makeRender";

export type BackgroundObjOpt = {
    size?: Kaboom.Vec2;
};

const defaultOpt = (
    k: Kaboom.KaboomCtx,
): BackgroundObjOpt & RenderOpt & ObjOpt => ({
    pos: k.center(),
    size: k.vec2(k.width(), k.height()),
});

export const makeBg = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.rect(opt.size.x, opt.size.y),
]);
