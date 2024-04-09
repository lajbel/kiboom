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
    defaultOpt:
        | Required<TNewOpt> & Partial<TNewOpt>
        | ((k: KaboomCtx) => Required<TNewOpt> & Partial<TNewOpt>),
    applyComps?: (
        opt: Required<TBaseOpt & TNewOpt>,
        k: KaboomCtx,
    ) => CompList<TNewComps>,
) => {
    return function(opt: TBaseOpt & Partial<TNewOpt>) {
        const k = getK();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TBaseOpt & TNewOpt>,
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

// TNOpt: New Opt
// TBOpt: Base Opt
export const makeMaker2 = <
    TNOpt,
    TBOpt,
>() => {
};
