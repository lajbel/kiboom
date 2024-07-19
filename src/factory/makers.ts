import { GameObj, type KAPLAYCtx } from "kaplay";
import { getK } from "../plugin";
import {
    ApplierFN,
    MakerFN,
    OptionFN,
} from "../utils/types";
import { use } from "../utils/use";
import { mergeOptions } from "./options";

export const makeMaker = <TComps, TOpt>(
    defaultOpt: OptionFN<TOpt>,
    componentsApply: ApplierFN<TComps, TOpt>,
): MakerFN<TOpt, TComps> => {
    return (opt) => {
        const k = getK<KAPLAYCtx>();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TOpt>,
        ) => {
            const comps = componentsApply?.(opt, k);
            return use(obj, comps);
        };

        const requiredOpt = mergeOptions(defaultOpt(k), opt);
        const baseObj = k.make();
        const newObj = applyNewComponents(baseObj, requiredOpt);

        return newObj;
    };
};

export const extendMaker = <
    TBaseComps,
    TBaseOpt,
    TNewComps,
    TNewOpt,
>(
    baseMaker: MakerFN<TBaseOpt, TBaseComps>,
    defaultOpt: OptionFN<TNewOpt> | OptionFN<TNewOpt & TBaseOpt>,
    componentsApply: ApplierFN<TNewComps, TNewOpt & TBaseOpt> = () => [],
): MakerFN<TNewOpt & TBaseOpt, TNewComps & TBaseComps> => {
    return (opt) => {
        const k = getK<KAPLAYCtx>();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TNewOpt & TBaseOpt>,
        ) => {
            const comps = componentsApply?.(opt, k);
            return use(obj, comps);
        };

        const defOpt = defaultOpt(k);
        const requiredOpt = mergeOptions(defOpt, opt);

        const newObj = applyNewComponents(baseMaker(requiredOpt), requiredOpt);

        return newObj;
    };
};
