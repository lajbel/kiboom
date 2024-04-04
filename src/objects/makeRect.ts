import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type RectOpt = {
    width: number;
    height: number;
};

const defaultOpt = (): RectOpt => ({
    width: 0,
    height: 0,
});

export const makeRect = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.rect(opt.width, opt.height),
]);
