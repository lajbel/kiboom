import { extendMaker } from "../factory/makers";
import { extendOptions } from "../factory/options";
import { ObjOpt } from "./makeObject";
import { makeRender, RenderOpt, renderOpt } from "./makeRender";

/**
 * The options of the rect object
 *
 * @group Options
 */
export type RectOpt = {
    width: number;
    height: number;
};

export const rectOpt = extendOptions<RectOpt, ObjOpt & RenderOpt>(
    renderOpt,
    () => ({}),
);

export const makeRect = extendMaker(makeRender, rectOpt, (opt, k) => [
    k.rect(opt.width, opt.height),
]);
