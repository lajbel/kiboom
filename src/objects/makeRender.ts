import { ColorComp, CompList, OpacityComp, ScaleComp, Vec2 } from "kaboom";
import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeObject } from "./makeObject";

/**
 * The options of the render object
 *
 * @group Options
 */
export type RenderOpt = {
    color?: string;
    opacity?: number;
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
