import { ColorComp, CompList, OpacityComp, ScaleComp, Vec2 } from "kaplay";
import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeObject } from "./makeObject";

/**
 * The options of the render object
 *
 * @group Options
 */
export type RenderOpt = {
    /** The color of the object. IN HEX: #fff00f */
    color?: string;
    /** The opacity of the object. From 0 to 1 */
    opacity?: number;
    /** The scale of the object */
    scale?: Vec2;
};

export type RenderComps = ColorComp | OpacityComp | ScaleComp;

export const renderOpt = makeOptions<RenderOpt>((k) => ({
    color: "#ffffff",
    opacity: 1,
    scale: k.vec2(1),
}));

export const makeRender = extendMaker(makeObject, renderOpt, (opt, k) => {
    return [
        k.color(k.Color.fromHex(opt.color)),
        k.opacity(opt.opacity),
        k.scale(opt.scale),
    ] as CompList<RenderComps>;
});
