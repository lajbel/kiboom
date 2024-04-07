kiboom is a Kaboom.js plugin that mainly provides a set of new "factory"
functions, made for create new easily modifiable objects.

## Installation
```
npm install kiboom
```

## Usage
```js
import kaboom from "kaboom";
import { kiboom } from "kiboom";

kaboom({
    plugins: [kiboom],
});

// New methods
makeSprite();
makeText();
```