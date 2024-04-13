import { Vec2 } from "kaboom";
import { extendMaker } from "../factory/makers";
import { extendOptions } from "../factory/options";
import { makeObject, objectOpt, ObjOpt } from "./makeObject";

/**
 * The options of the area object
 *
 * @group Options
 */
export type AreaOpt = {
    size: Vec2;
};

const areaOpt = extendOptions<AreaOpt, ObjOpt>(objectOpt, (k) => ({}));

export const makeArea = extendMaker(makeObject, areaOpt, (opt, k) => [
    k.area({
        shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y),
    }),
]);
