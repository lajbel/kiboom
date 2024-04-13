import { KaboomCtx } from "kaboom";

let kCtx: KaboomCtx | null = null;

export function getK<T extends KaboomCtx = KaboomCtx>(): T {
    if (!kCtx) {
        throw new Error(
            "Kaboom context is not initialized, you can't use it now",
        );
    }

    return kCtx as T;
}

export const createKaboomPlugin = <T>(pluginRun: (k: KaboomCtx) => T) => {
    return {
        run: (k: KaboomCtx) => {
            kCtx = k;

            return {
                ...pluginRun(k),
            };
        },
    };
};
