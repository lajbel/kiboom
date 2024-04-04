import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type SpriteObjOpt = {
    sprite?: string;
};

const defaultOpt = (): SpriteObjOpt => ({});

export const makeSprite = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.sprite(opt.sprite),
]);
