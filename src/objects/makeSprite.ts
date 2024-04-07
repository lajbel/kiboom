import { makeMaker } from "../factory/makeMaker";
import { makeRender } from "./makeRender";

export type SpriteOpt = {
    sprite: string;
};

// TODO: Default sprite shouldn't be avaible
const defaultOpt = (): SpriteOpt => ({
    sprite: "bean",
});

export const makeSprite = makeMaker(makeRender, defaultOpt, (opt, k) => [
    k.sprite(opt.sprite),
]);
