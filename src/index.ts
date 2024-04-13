import { extendMaker, makeMaker } from "./factory/makers";
import { makeOptions } from "./factory/options";
import { makeArea } from "./objects/makeArea";
import { makeBg } from "./objects/makeBg";
import { makeCircle } from "./objects/makeCircle";
import { makeObject } from "./objects/makeObject";
import { makeRect } from "./objects/makeRect";
import { makeRender } from "./objects/makeRender";
import { makeSprite } from "./objects/makeSprite";
import { makeText } from "./objects/makeText";
import { createOptions } from "./options/createOptions";
import { createKaboomPlugin } from "./plugin";
import { KiboomPlugin } from "./types";

const { run: kiboom } = createKaboomPlugin<KiboomPlugin>(() => {
    return {
        // kiScene,
        // createKaboomPlugin,

        // components
        // custom,
        // children,

        // objects
        makeObject,
        makeArea,

        // -- render
        makeRender,
        makeRect,
        makeCircle,
        makeText,
        makeSprite,
        makeBg,

        // makers creation
        makeMaker,
        extendMaker,

        // options api
        makeOptions: makeOptions,
    };
});

export { kiboom };
