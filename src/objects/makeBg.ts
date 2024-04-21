import { Vec2 } from "kaboom";
import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { ObjOpt } from "./makeObject";
import { makeRender } from "./makeRender";

/**
 * The options of the background object
 *
 * @group Options
 */
export type BackgroundOpt = {
    /**
     * The size of the background
     */
    size?: Vec2;
};

const backgroundOpt = makeOptions<BackgroundOpt & ObjOpt>(
    (k) => ({
        size: k.vec2(k.width(), k.height()),
        pos: k.center(),
    }),
);

export const makeBg = extendMaker(makeRender, backgroundOpt, (opt, k) => [
    k.rect(opt.size.x, opt.size.y),
]);
