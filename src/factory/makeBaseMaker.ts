import type { Comp, CompList, GameObj, KaboomCtx } from "kaboom";
import { createOptions } from "../options/createOptions";
import { getK } from "../plugin";
import { use } from "../utils/use";

export const makeBaseMaker = <
    TOpt extends {},
    TComps extends Comp,
>(
    defaultOpt: Required<TOpt> | ((k: KaboomCtx) => Required<TOpt>),
    applyComps?: (opt: Required<TOpt>, k: KaboomCtx) => CompList<TComps>,
) => {
    return (opt: Partial<TOpt>) => {
        const k = getK();
        const newObj = k.make();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TOpt>,
        ) => {
            const comps = applyComps?.(opt, k) || [];
            return use(obj, comps);
        };

        if (defaultOpt instanceof Function) {
            const parsedOpt = createOptions(defaultOpt(k), opt);
            const baseObj = applyNewComponents(newObj, parsedOpt);

            return baseObj;
        }

        const parsedOpt = createOptions(defaultOpt, opt);
        const baseObj = applyNewComponents(newObj, parsedOpt);

        return baseObj;
    };
};
