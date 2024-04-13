import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeRender } from "./makeRender";

/**
 * The options of the rect object
 *
 * @group Options
 */
export type RectOpt = {
    /**
     * The width of the rect
     */
    width: number;
    /**
     * The height of the rect
     */
    height: number;
};

export const rectOpt = makeOptions<RectOpt>(() => ({}));

export const makeRect = extendMaker(makeRender, rectOpt, (opt, k) => [
    k.rect(opt.width, opt.height),
]);
