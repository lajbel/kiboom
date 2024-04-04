import { ObjOpt } from "../objects/makeBase";

export function createOptions<T extends {}, T2 extends ObjOpt>(
    defaultOptions: T,
    userOpt?: T2,
) {
    return Object.assign(defaultOptions, userOpt);
}
