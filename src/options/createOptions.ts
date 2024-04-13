import { ObjOpt } from "../objects/makeObject";

export function createOptions<T extends {}, T2 extends ObjOpt>(
    defaultOptions: T,
    userOpt?: T2,
) {
    return Object.assign(defaultOptions, userOpt);
}

export const createOptions2 = <
    TDefault extends {},
    TUser extends {},
>(
    defaultOpt: TDefault,
    userOpt: TUser,
) => {
    return Object.assign(defaultOpt, userOpt);
};
