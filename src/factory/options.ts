import { type KAPLAYCtx } from "kaplay";
import { OptionFN } from "../utils/types";

export const makeOptions = <T>(
    opt: (k: KAPLAYCtx) => Partial<T>,
): OptionFN<T> => {
    // For now, is user responsability to make sure that the options are correct
    // respecting the type T
    return (k) => opt(k) as T;
};

export const mergeOptions = <
    T,
    T2,
>(
    defaultOpt: T,
    opt: T2,
) => {
    return {
        ...defaultOpt,
        ...opt,
    } as Required<T & T2>;
};
