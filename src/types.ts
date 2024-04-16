import type {
    AreaComp,
    Comp,
    EmptyComp,
    GameObj,
    KaboomCtx,
    RectComp,
    SpriteComp,
    TextComp,
} from "kaboom";
import { ChildrenDefinition } from "./components/childrens";
import { extendMaker } from "./factory/makers";
import type { AreaOpt } from "./objects/makeArea";
import { BackgroundOpt } from "./objects/makeBg";
import type { CircleOpt } from "./objects/makeCircle";
import type { BaseComps, ObjOpt } from "./objects/makeObject";
import type { RectOpt } from "./objects/makeRect";
import type { RenderComps, RenderOpt } from "./objects/makeRender";
import type { SpriteOpt } from "./objects/makeSprite";
import type { TextOpt } from "./objects/makeText";
import { SceneState } from "./scenes/SceneState";
import { ApplierFN, MakerFN, OptionalOptionFN, OptionFN } from "./utils/types";

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
     * @example
     * ```js
     * // Good for parent objects!
     * const myParent = k.add(makeObject({
     *     pos: k.vec2(100, 100),
     * });
     *
     * myParent.add(k.makeSprite({
     *     sprite: "bean",
     * }));
     * ```
     *
     * @group Object Makers
     */
    makeObject(opt: ObjOpt): GameObj<BaseComps>;

    /**
     * Make an object with a collider component.
     * *Maker extends {@link makeObject}*
     *
     * @example
     * ```js
     * const clickableArea = k.add(makeArea({
     *     size: k.vec2(100, 100),
     * }));
     * ```
     *
     * @group Object Makers
     */
    makeArea(opt: ObjOpt & AreaOpt): GameObj<BaseComps & AreaComp>;

    /**
     * Make an object with a color and opacity components.
     * *Maker extends {@link makeObject}*
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
     */
    makeRender(
        opt?: ObjOpt & RenderOpt,
    ): GameObj<BaseComps & RenderComps>;

    /**
     * Make an object with a rectangle component.
     * *Maker extends {@link makeRender}*
     *
     * @example
     * ```js
     * const rect = k.add(k.makeRect({
     *     width: 100,       // from makeRect
     *     height: 100,      // from makeRect
     *     color: "#ff00ff", // from makeRender
     * }));
     *
     * @group Object Makers
     */
    makeRect(
        opt: ObjOpt & RenderOpt & RectOpt,
    ): GameObj<BaseComps & RenderComps & RectComp>;

    /**
     * Make an object with a circle component.
     * *Maker extends {@link makeRender}*
     *
     * @example
     * ```js
     * const circle = k.add(k.makeCircle({
     *     radius: 50,       // from makeCircle
     *     color: "#ff00ff", // from makeRender
     * }));
     *
     * @group Object Makers
     */
    makeCircle(
        opt: ObjOpt & RenderOpt & CircleOpt,
    ): GameObj<BaseComps & RenderComps>;

    /**
     * Make an object with a text component.
     * *Maker extends {@link makeRender}*
     *
     * @example
     * ```js
     * const text = k.add(k.makeText({
     *     text: "Hello, world!", // from makeText
     *     size: 24,              // from makeText
     *     opacity: 0,            // from makeRender
     * }));
     *
     * @group Object Makers
     */
    makeText(
        opt: ObjOpt & RenderOpt & TextOpt,
    ): GameObj<BaseComps & RenderComps & TextComp>;

    /**
     * Make an object with a sprite component.
     * *Maker extends {@link makeRender}*
     *
     * @example
     * ```js
     * const sprite = k.add(k.makeSprite({
     *     sprite: "bean",        // from makeSprite
     *     scale: 2,              // from makeRender
     *     pos: k.vec2(100, 100), // from makeObject
     * }));
     *
     * @group Object Makers
     */
    makeSprite(
        opt: ObjOpt & RenderOpt & SpriteOpt,
    ): GameObj<BaseComps & RenderComps & SpriteComp>;

    /**
     * Make a color background object.
     * *Maker extends {@link makeRender}*
     *
     * @group Object Makers
     * @category Object Makers
     */
    makeBg(
        opt?: ObjOpt & RenderOpt & BackgroundOpt,
    ): GameObj<BaseComps & RenderComps & RectComp>;

    /**
     * Make an object maker. This is used internally for {@link makeObject},
     * but we recommend using {@link extendMaker} instead if you want to
     * mantain the base options.
     *
     * @group Base
     * @category Base
     */
    makeMaker<TComps, TOpt>(
        /** The default options for the maker */
        defaultOpt: OptionFN<TOpt>,
        componentsApply: ApplierFN<TComps, TOpt>,
    ): MakerFN<TOpt, TComps>;

    /**
     * Extend a maker with new components.
     *
     * @group Base
     * @category Base
     */
    extendMaker<TBaseComps, TBaseOpt, TNewComps, TNewOpt>(
        baseMaker: MakerFN<TBaseOpt, TBaseComps>,
        defaultOpt: OptionFN<TNewOpt> | OptionFN<TNewOpt & TBaseOpt>,
        componentsApply: ApplierFN<TNewComps, TNewOpt & TBaseOpt>,
    ): MakerFN<TNewOpt & TBaseOpt, TNewComps & TBaseComps>;

    /**
     * Create an scene with an SceneManager
     *
     * @alpha In development
     */
    kiScene<T extends {}>(
        name: string,
        def: (sceneData: SceneState<T>, ...args: any[]) => void,
    ): () => void;

    /**
     * A component for define a custom component
     */
    custom<T>(custom: () => T): Comp & T;

    /**
     * A component for define a childrens
     */
    children(childrens: ChildrenDefinition<Comp[]>): EmptyComp;

    /**
     * Create a options object
     */
    makeOptions<T>(opt: (k: KaboomCtx) => Partial<T>): OptionFN<T>;
}
