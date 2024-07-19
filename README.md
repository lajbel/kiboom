kiboom is a KAPLAY plugin that mainly provides a set of new "factory"
functions, made for create new easily modifiable objects.

## Installation

```
npm install kiboom
```

## Usage

```js
import kaplay from "kaplay";
import { kiboom } from "kiboom";

kaplay({
  plugins: [kiboom],
});

// New methods
makeSprite();
makeText();
```
