import { TextAlign } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type TextObjOpt = {
    text: string;
    size: number;
    font: string;
    align: TextAlign;
};

const defaultOpt: TextObjOpt = {
    text: "sample text",
    size: 16,
    font: "happy",
    align: "center",
};

/**
 * Make a text object.
 *
 * @example
 * ```js
 * const text = k.add(makeText({
 *  text: "Hello, World!",
 * }));
 */
export const makeText = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.text(opt.text, {
        size: opt.size,
        font: opt.font,
        align: opt.align,
    }),
]);
