import { extendMaker } from "../factory/makers";
import { makeOptions } from "../factory/options";
import { makeRender } from "./makeRender";

/**
 * The options of the sprite object
 *
 * @group Options
 */
export type SpriteOpt = {
    /**
     * The sprite name
     */
    sprite: string;
};

const spriteOpt = makeOptions<SpriteOpt>(() => ({}));

export const makeSprite = extendMaker(makeRender, spriteOpt, (opt, k) => [
    k.sprite(opt.sprite),
]);
