import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeRender } from "./makeRender";

/**
 * The options of the circle object
 *
 * @group Options
 */
export type CircleOpt = {
    /**
     * The radius of the circle
     */
    radius: number;
};

export const circleOpt = makeOptions<CircleOpt>(() => ({}));

export const makeCircle = extendMaker(makeRender, circleOpt, (opt, k) => [
    k.circle(opt.radius),
]);
