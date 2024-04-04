import { TextAlign } from "kaboom";
import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type TextObjOpt = {
    text?: string;
    size?: number;
    font?: string;
    align?: TextAlign;
};

const defaultOpt: TextObjOpt = {
    text: "",
    size: 16,
    font: "happy",
    align: "center",
};

export const makeText = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.text(opt.text, {
        size: opt.size,
        font: opt.font,
        align: opt.align,
    }),
]);
