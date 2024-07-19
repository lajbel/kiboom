import { Comp } from "kaplay";

export const custom = <T>(
    custom: () => T,
) => {
    return {
        ...custom(),
    } as Comp & T;
};
