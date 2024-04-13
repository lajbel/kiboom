import { CompList, GameObj, KaboomCtx } from "kaboom";
import { getK } from "../plugin";
import { FlipOptional } from "../utils/types";
import { use } from "../utils/use";
import { mergeOptions } from "./options";

type MakerFN<TOpt, TComps> = (
    opt: TOpt,
) => GameObj<TComps>;

export const makeMaker = <
    TComps,
    TOpt,
>(
    defaultOpt: (k: KaboomCtx) => TOpt,
    componentsApply: (
        opt: Required<TOpt>,
        k: KaboomCtx,
    ) => CompList<TComps>,
): MakerFN<FlipOptional<TOpt>, TComps> => {
    return (opt) => {
        const k = getK<KaboomCtx>();

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
    TNewComps,
    TOpt,
>(
    baseMaker: (opt: TOpt) => GameObj<TBaseComps>,
    defaultOpt: (k: KaboomCtx) => TOpt,
    componentsApply: (
        opt: Required<TOpt>,
        k: KaboomCtx,
    ) => CompList<TNewComps>,
): MakerFN<FlipOptional<TOpt>, TBaseComps & TNewComps> => {
    return (opt) => {
        const k = getK<KaboomCtx>();

        const applyNewComponents = <T>(
            obj: GameObj<T>,
            opt: Required<TOpt>,
        ) => {
            const comps = componentsApply?.(opt, k);
            return use(obj, comps);
        };

        const baseOpt = defaultOpt(k);
        const requiredOpt = mergeOptions(baseOpt, opt);

        const baseObj = baseMaker(requiredOpt);
        const newObj = applyNewComponents(baseObj, requiredOpt);

        return newObj;
    };
};
