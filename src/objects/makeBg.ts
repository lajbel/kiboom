import { KaboomCtx, Vec2 } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { ObjOpt } from "./makeBase";
import { makeRender } from "./makeRender";

export type BackgroundObjOpt = {
    size: Vec2;
};

const defaultOpt = (
    k: KaboomCtx,
): BackgroundObjOpt => ({
    size: k.vec2(k.width(), k.height()),
});

export const makeBg = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.rect(opt.size.x, opt.size.y),
]);
