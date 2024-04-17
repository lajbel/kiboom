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
import type { SceneState } from "./scenes/SceneState";
import { ApplierFN, MakerFN, OptionFN } from "./utils/types";

export { SceneState };

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
     *     size: k.vec2(50, 50)  // from makeRect
     *     color: "#ff00ff",     // from makeRender
     * }));
     * ```
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
     *
     * @template TBaseComps - The base components from the base maker
     * @template TBaseOpt - The base options from the base maker
     * @template TNewComps - The new components added to the base
     * @template TNewOpt - The new options added to the base
     *
     * @returns A new maker with the new components and options
     */
    extendMaker<TBaseComps, TBaseOpt, TNewComps, TNewOpt>(
        /**
         * The base maker to extend. Example: makeObject
         */
        baseMaker: MakerFN<TBaseOpt, TBaseComps>,
        /**
         * An options object created with {@link makeOptions}
         */
        defaultOpt: OptionFN<TNewOpt> | OptionFN<TNewOpt & TBaseOpt>,
        componentsApply: ApplierFN<TNewComps, TNewOpt & TBaseOpt>,
        /**
         * A function that returns the new maker
         */
    ): MakerFN<TNewOpt & TBaseOpt, TNewComps & TBaseComps>;

    /**
     * Create an scene with an SceneManager
     *
     * @alpha
     * @group Scenes
     */
    kiScene<T extends {}>(
        name: string,
        def: (sceneData: SceneState<T>, ...args: any[]) => void,
    ): () => void;

    /**
     * A component for define a custom component.
     *
     * @group Components
     */
    custom<T>(custom: () => T): Comp & T;

    /**
     * A component for define a childrens/home/lajbel/gh/kiboom/src
     *
     * @group Components
     */
    children(childrens: ChildrenDefinition<Comp[]>): EmptyComp;

    /**
     * Create a options object
     *
     * @group Base
     *
     * @example
     * ```js
     * const myOptions = k.makeOptions(k => ({
     *    pos: k.vec2(100, 100),
     *    scale: 2,
     * }));
     *
     * const myObj = k.extendMaker(k.makeObject, myOptions, (comps, opt) => ({
     *     // ...
     * });
     */
    makeOptions<T>(opt: (k: KaboomCtx) => Partial<T>): OptionFN<T>;
}
