import type { AudioPlay, AudioPlayOpt } from "kaboom";
import { getK } from "../plugin";

/**
 * A helper class to manage the state of a scene.
 */
export class SceneState<T> {
    name: string = "";
    backgroundMusic: AudioPlay | null = null;
    saveData?: () => T;
    data: T = {} as T;

    constructor(name: string, saveData?: () => any) {
        this.name = name;
        this.saveData = saveData;
    }

    /** Set the persistent data */
    setPersistentData(data: T) {
        this.saveData = () => data;
    }

    /**
     * Get the persistent data of the scene.
     */
    getData(key: keyof T, defaultValue?: T[keyof T]): T[keyof T] {
        // @ts-ignore
        return this.saveData<T>()[key] ?? defaultValue;
    }

    /**
     * Save the persistent data of the scene.
     */
    saveSceneData() {
        const k = getK();
        if (this.saveData) k.setData(`scene.${this.name}`, this.saveData());
    }

    /**
     * Sets a background music for the scene.
     */
    setBackgroundMusic(music: string, options: AudioPlayOpt) {
        const k = getK();

        if (this.backgroundMusic) {
            this.backgroundMusic.stop();
        }

        this.backgroundMusic = k.play(music, options);
    }

    /**
     * Change the scene to the given scene saving the current scene data.
     */
    changeScene(
        /** The name of the scene to go to */
        scene: string,
        /** Arguments for scene */
        ...args: any[]
    ) {
        this.saveSceneData();
        this.backgroundMusic?.stop();

        const k = getK();

        k.go(scene, ...args);
    }
}
