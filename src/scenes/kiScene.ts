import { getK } from "../plugin";
import { SceneState } from "./SceneState";

export const kiScene = <T extends {}>(
    name: string,
    def: (sceneData: SceneState<T>, ...args: any[]) => void,
) => {
    const k = getK();
    const sceneState = new SceneState<T>(name);

    return () => k.scene(name, (...args) => def(sceneState, ...args));
};
