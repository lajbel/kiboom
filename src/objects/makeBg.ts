import { Vec2 } from "kaboom";
import { extendMaker } from "../factory/makers";
import { extendOptions } from "../factory/options";
import { ObjOpt } from "./makeObject";
import { makeRender, RenderOpt, renderOpt } from "./makeRender";

/**
 * The options of the background object
 *
 * @group Options
 */
export type BackgroundOpt = {
    size?: Vec2;
};

export const backgroundOpt = extendOptions<BackgroundOpt, ObjOpt & RenderOpt>(
    renderOpt,
    (k) => ({
        size: k.vec2(k.width(), k.height()),
    }),
);

export const makeBg = extendMaker(makeRender, backgroundOpt, (opt, k) => [
    k.rect(opt.size.x, opt.size.y),
]);
