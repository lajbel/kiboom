import kaplay from "kaplay";
import { kiboom } from "..";

const k = kaplay({
    plugins: [kiboom],
});

k.loadBean();

// making sprite
k.add(k.makeSprite({
    sprite: "bean",
    pos: k.vec2(100, 100),
}));

// making area
k.add(k.makeArea({
    size: k.vec2(100, 100),
    pos: k.vec2(100, 100),
}));

// making text
k.add(k.makeText({
    text: "Hello, Kiboom!",
    pos: k.vec2(200, 100),
}));

// We create some options with defaults
const makePersonOpt = k.makeOptions(() => ({
    name: "unnamed",
}));

// an empty maker
const makePerson = k.extendMaker(k.makeObject, makePersonOpt, (opt) => [
    {
        name: opt.name,
        hi() {
            k.debug.log(`Hi, I'm ${this.name}`);
        },
    },
]);

// creating a person
const person = k.add(makePerson({
    name: "Alice",
}));

// calling the method
person.hi();

k.debug.inspect = true;
