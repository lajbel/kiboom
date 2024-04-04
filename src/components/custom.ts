import { Comp } from "kaboom";

export const custom = <T>(
    custom: () => T,
) => {
    return {
        ...custom(),
    } as Comp & T;
};
