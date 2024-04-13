import {
    AreaComp,
    GameObj,
    KaboomCtx,
    RectComp,
    SpriteComp,
    TextComp,
} from "kaboom";
import { makeMaker } from "./factory/makeMaker";
import { AreaOpt } from "./objects/makeArea";
import { BaseComps, ObjOpt } from "./objects/makeBase";
import { BackgroundOpt } from "./objects/makeBg";
import { CircleOpt } from "./objects/makeCircle";
import { RectOpt } from "./objects/makeRect";
import { RenderComps, RenderOpt } from "./objects/makeRender";
import { SpriteOpt as SpriteOpt } from "./objects/makeSprite";
import { TextObjOpt } from "./objects/makeText";

type OptExtend<TBase, TNew> = Partial<TBase & TNew>;

export declare function kiboom(k: KaboomCtx): KiboomPlugin;

/**
 * The kiboom Kaboom's plugin
 *
 * @internal
 */
export interface KiboomPlugin {
    /**
     * Make an object with the base components.
     *
     * @group Object Makers
     * @category Object Makers
     *
     * @example
     * ```js
     * // Good for parent objects!
     *
     * const myParent = k.add(makeBase({
     *  pos: k.vec2(100, 100),
     * });
     *
     * myParent.add(k.makeSprite({
     *  sprite: "bean",
     * }));
     *
     * ```
     */
    makeBase(opt: Partial<ObjOpt>): GameObj<BaseComps>;

    /**
     * Make an object with a collider component.
     * *Maker extends {@link makeBase}*
     *
     * @group Object Makers
     * @category Object Makers
     *
     * @example
     * ```js
     * const clickableArea = k.add(makeArea({
     *   width: 100,
     *   height: 100,
     * }));
     * ```
     */
    makeArea(opt: Partial<ObjOpt & AreaOpt>): GameObj<BaseComps & AreaComp>;

    /**
     * Make an object with a color and opacity components.
     * *Maker extends {@link makeBase}*
     *
     * Is not recommended to use this maker directly,
     * use the other render makers instead:
     *
     * - {@link makeRect}
     * - {@link makeCircle}
     * - {@link makeText}
     * - {@link makeSprite}
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeRender(
        opt?: OptExtend<ObjOpt, RenderOpt>,
    ): GameObj<BaseComps & RenderComps>;

    /**
     * Make an object with a rectangle component.
     * *Maker extends {@link makeRender}*
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeRect(
        opt: Partial<ObjOpt & RenderOpt & RectOpt>,
    ): GameObj<BaseComps & RenderComps & RectComp>;

    /**
     * Make an object with a circle component.
     * *Maker extends {@link makeRender}*
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeCircle(
        opt: Partial<ObjOpt & RenderOpt & CircleOpt>,
    ): GameObj<BaseComps & RenderComps>;

    /**
     * Make an object with a text component.
     * *Maker extends {@link makeRender}*
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeText(
        opt: Partial<ObjOpt & RenderOpt & TextObjOpt>,
    ): GameObj<BaseComps & RenderComps & TextComp>;

    /**
     * Make an object with a sprite component.
     * *Maker extends {@link makeRender}*
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeSprite(
        opt: Partial<ObjOpt & RenderOpt & SpriteOpt>,
    ): GameObj<BaseComps & RenderComps & SpriteComp>;

    /**
     * Make a background object.
     * *Maker extends {@link makeRender}*
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeBg(
        opt?: Partial<ObjOpt & RenderOpt & BackgroundOpt>,
    ): GameObj<BaseComps & RenderComps & RectComp>;

    /**
     * Make a object maker.
     */
    makeMaker: typeof makeMaker;
}
