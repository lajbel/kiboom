import { Vec2 } from "kaboom";
import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeRender } from "./makeRender";

/**
 * The options of the rect object
 *
 * @group Options
 */
export type RectOpt = {
    /** The size of the rect */
    size: Vec2;
};

export const rectOpt = makeOptions<RectOpt>(() => ({}));

export const makeRect = extendMaker(makeRender, rectOpt, (opt, k) => [
    k.rect(opt.size.x, opt.size.y),
]);
