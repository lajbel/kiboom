import { CompList, GameObj, KaboomCtx } from "kaboom";

export type MakerFN<TOpt, TComps> = (
    opt: TOpt,
) => GameObj<TComps>;

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

export type OptionFN<
    TOpt,
> = (
    k: KaboomCtx,
) => TOpt;
