import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type CircleObjOpt = {
    radius?: number;
};

const defaultOpt = (): CircleObjOpt => ({
    radius: 15,
});

export const makeCircle = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.circle(opt.radius),
]);
