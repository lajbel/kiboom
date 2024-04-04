import type { AudioPlay, AudioPlayOpt } from "kaboom";
import { getK } from "../plugin";

export class SceneState<T> {
    name: string = "";
    backgroundMusic: AudioPlay | null = null;
    saveData?: () => T;
    data: T = {} as T;

    constructor(name: string, saveData?: () => any) {
        this.name = name;
        this.saveData = saveData;
    }

    setPersistentData(data: T) {
        this.saveData = () => data;
    }

    getData(key: keyof T, defaultValue?: T[keyof T]): T[keyof T] {
        // @ts-ignore
        return this.saveData<T>()[key] ?? defaultValue;
    }

    saveSceneData() {
        const k = getK();
        if (this.saveData) k.setData(`scene.${this.name}`, this.saveData());
    }

    setBackgroundMusic(music: string, options: AudioPlayOpt) {
        const k = getK();

        if (this.backgroundMusic) {
            this.backgroundMusic.stop();
        }

        this.backgroundMusic = k.play(music, options);
    }

    changeScene(scene: string, ...args: any[]) {
        this.saveSceneData();
        this.backgroundMusic?.stop();

        const k = getK();

        k.go(scene, ...args);
    }
}