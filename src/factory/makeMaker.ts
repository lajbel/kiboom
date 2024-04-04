import type { Comp, CompList, GameObj, KaboomCtx } from "kaboom";
import { BaseComps } from "../objects/makeBase";
import { createOptions } from "../options/createOptions";
import { getK } from "../plugin";
import { use } from "../utils/use";

export const makeMaker = <
    TNewOpt extends TBaseOpt & {
        [name: string]: any;
    },
    TNewComps extends Comp,
    TBaseOpt extends {} = {},
    TBaseComps = BaseComps,
>(
    baseFn: (opt: TBaseOpt) => GameObj<TBaseComps>,
    defaultOpt: TNewOpt | ((k: KaboomCtx) => TNewOpt),
    applyComps?: (opt: TBaseOpt & TNewOpt, k: KaboomCtx) => CompList<TNewComps>,
) => {
    return function(opt: TBaseOpt & TNewOpt) {
        const k = getK();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: TBaseOpt & TNewOpt,
        ) => {
            const comps = applyComps?.(opt, k) || [];
            return use(obj, comps);
        };

        if (defaultOpt instanceof Function) {
            const parsedOpt = createOptions(defaultOpt(k), opt);
            const baseObj = applyNewComponents(baseFn(parsedOpt), parsedOpt);

            return baseObj;
        }

        const parsedOpt = createOptions(defaultOpt, opt);
        const baseObj = applyNewComponents(baseFn(parsedOpt), parsedOpt);

        return baseObj;
    };
};
