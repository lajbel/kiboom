import { extendMaker } from "../factory/makers";
import { extendOptions } from "../factory/options";
import { ObjOpt } from "./makeObject";
import { makeRender, RenderOpt, renderOpt } from "./makeRender";

/**
 * The options of the circle object
 *
 * @group Options
 */
export type CircleOpt = {
    radius: number;
};

export const circleOpt = extendOptions<CircleOpt, ObjOpt & RenderOpt>(
    renderOpt,
    () => ({}),
);

export const makeCircle = extendMaker(makeRender, circleOpt, (opt, k) => [
    k.circle(opt.radius),
]);
