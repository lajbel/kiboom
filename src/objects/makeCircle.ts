import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type CircleOpt = {
    radius: number;
};

const defaultOpt = (): CircleOpt => ({
    radius: 15,
});

export const makeCircle = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.circle(opt.radius),
]);
