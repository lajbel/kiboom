import { Comp, EmptyComp } from "kaboom";

type ChildrenDefinition<T extends Comp[]> = {
    [name: string]: () => T;
};

export function children(childrens: ChildrenDefinition<Comp[]>) {
    const newComp = {};

    for (const key in childrens) {
        newComp[key] = childrens[key]();
    }

    return {
        add() {
            for (const key in newComp) {
                this.add(newComp[key]);
            }
        },
    } as EmptyComp;
}
