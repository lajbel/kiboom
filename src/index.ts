import { children } from "./components/childrens";
import { custom } from "./components/custom";
import { makeBaseMaker } from "./factory/makeBaseMaker";
import { makeMaker } from "./factory/makeMaker";
import { makeArea } from "./objects/makeArea";
import { makeBase } from "./objects/makeBase";
import { makeBg } from "./objects/makeBg";
import { makeCircle } from "./objects/makeCircle";
import { makeRect } from "./objects/makeRect";
import { makeRender } from "./objects/makeRender";
import { makeSprite } from "./objects/makeSprite";
import { makeText } from "./objects/makeText";
import { createOptions } from "./options/createOptions";
import { createKaboomPlugin } from "./plugin";
import { kiScene } from "./scenes/kiScene";
import { KiboomPlugin } from "./types";

const { run: kiboom } = createKaboomPlugin<KiboomPlugin>(() => {
    return {
        // kiScene,
        // createKaboomPlugin,

        // components
        // custom,
        // children,

        // objects
        makeBase,
        makeArea,

        // -- render
        makeRender,
        makeRect,
        makeCircle,
        makeText,
        makeSprite,
        makeBg,
        // makers
        // makeMaker,
        // makeBaseMaker,

        // options api
        // createOptions,
    };
});

export { kiboom };
