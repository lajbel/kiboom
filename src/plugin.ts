import { KAPLAYCtx } from "kaplay";

let kCtx: KAPLAYCtx | null = null;

export function getK<T extends KAPLAYCtx = KAPLAYCtx>(): T {
    if (!kCtx) {
        throw new Error(
            "KAPLAY context is not initialized, you can't use it now",
        );
    }

    return kCtx as T;
}

export const createKAPLAYPlugin = <T>(pluginRun: (k: KAPLAYCtx) => T) => {
    return {
        run: (k: KAPLAYCtx) => {
            kCtx = k;

            return {
                ...pluginRun(k),
            };
        },
    };
};
