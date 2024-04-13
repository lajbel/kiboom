import { TextAlign } from "kaboom";
import { extendMaker } from "../factory/makers";
import { extendOptions } from "../factory/options";
import { ObjOpt } from "./makeObject";
import { makeRender, RenderOpt, renderOpt } from "./makeRender";

/**
 * The options of the text object
 *
 * @group Options
 */
export type TextOpt = {
    text: string;
    size: number;
    font: string;
    align: TextAlign;
};

const textOpt = extendOptions<TextOpt, ObjOpt & RenderOpt>(renderOpt, () => ({
    text: "text",
    size: 24,
    font: "monospace",
    align: "left",
}));

export const makeText = extendMaker(makeRender, textOpt, (opt, k) => [
    k.text(opt.text, {
        size: opt.size,
        font: opt.font,
        align: opt.align,
    }),
]);
