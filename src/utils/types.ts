import { CompList, GameObj, KaboomCtx } from "kaboom";

/**
 * A function that creates a Game Object.
 *
 * @template TOpt - The options to create the object.
 * @template TComps - The components that the object will have.
 *
 * @example
 * ```js
 * makeArea();
 * ```
 */
export type MakerFN<TOpt, TComps> = (
    /** Options to create the object */
    opt: TOpt,
) => GameObj<TComps>;

/**
 * A function that applies components to a Game Object.
 *
 * @example
 * ```js
 * extendMaker(
 *     makeBase,
 *     randomOpt,
 *     // This is the applier function
 *     (opt, k) => [
 *         sprite(opt.sprite),
 *     ]);
 * ```
 */
export type ApplierFN<TComps, TOpt> = (
    opt: Required<TOpt>,
    k: KaboomCtx,
) => CompList<TComps>;

export type OptionalOptionFN<T> = T extends HasOptionalKey<T>
    ? OptionFN<T> | undefined
    : OptionFN<T>;

export type HasOptionalKey<T> = T[keyof T] extends NonNullable<T[keyof T]>
    ? false
    : true;

/**
 * A function made with {@link makeOptions}
 */
export type OptionFN<
    TOpt,
> = (
    k: KaboomCtx,
) => TOpt;
