import type { TextAlign } from "kaplay";
import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeRender } from "./makeRender";

/**
 * The options of the text object
 *
 * @group Options
 */
export type TextOpt = {
    /** The text to display */
    text: string;
    /** The size of the text */
    textSize?: number;
    /** The font of the text */
    textFont?: string;
    /** The align of the text */
    textAlign?: TextAlign;
};

const textOpt = makeOptions<TextOpt>(() => ({
    textSize: 24,
    textFont: "monospace",
    textAlign: "left",
}));

export const makeText = extendMaker(makeRender, textOpt, (opt, k) => [
    k.text(opt.text, {
        size: opt.textSize,
        font: opt.textFont,
        align: opt.textAlign,
    }),
]);
