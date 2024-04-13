import { KaboomCtx } from "kaboom";
import { FlipOptional } from "../utils/types";

export const makeOptions = <
    T,
>(
    opt: (k: KaboomCtx) => FlipOptional<T>,
) => {
    return (k: KaboomCtx) => {
        return opt(k);
    };
};

export const mergeOptions = <
    T,
    T2,
>(
    defaultOpt: T,
    opt: T2,
): Required<T> => {
    return {
        ...defaultOpt,
        ...opt,
    } as Required<T>;
};

export const extendOptions = <
    TNew,
    TBase,
>(
    baseOpt: (k: KaboomCtx) => TBase,
    newOpt: (k: KaboomCtx) => FlipOptional<TNew> & TBase,
) => {
    return (k: KaboomCtx) => {
        return {
            ...baseOpt(k),
            ...newOpt(k),
        } as FlipOptional<TNew & TBase>;
    };
};
