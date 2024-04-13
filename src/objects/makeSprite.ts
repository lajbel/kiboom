import { extendMaker } from "../factory/makers";
import { extendOptions } from "../factory/options";
import { ObjOpt } from "./makeObject";
import { makeRender, RenderOpt, renderOpt } from "./makeRender";

/**
 * The options of the sprite object
 *
 * @group Options
 */
export type SpriteOpt = {
    sprite: string;
};

// TODO: Default sprite shouldn't be avaible
export const spriteOpt = extendOptions<SpriteOpt, ObjOpt & RenderOpt>(
    renderOpt,
    () => ({}),
);

export const makeSprite = extendMaker(makeRender, spriteOpt, (opt, k) => [
    k.sprite(opt.sprite),
]);
