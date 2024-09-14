# Changelog

All notable changes to this project will be documented in this file.

## 1.2.3

- refix: fix: `makeOptions` don't accepting tags

## 1.2.2

- fix: `makeOptions` don't accepting tags

## 1.2.0

Now we support KAPLAY

## 1.0.5 - 21/04/2024

- (doc) Update some types and examples

## 1.0.4 - 16/04/2024

- (feat) Now `extendMaker` doesn't need the base maker options, and is not needed
  a component applier, now being

> extendMaker(baseMaker, defaultOpt, componentsApply?)

```js
const backgroundOpt = makeOptions((k) => ({
    size: k.vec2(k.width(), k.height()),
    pos: k.center(),
}));

// We only set a default in makeRect
const makeBg = extendMaker(makeRect, backgroundOpt);
```

## 1.0.3 - 15/04/2024

- (doc) Add documentation (jsDoc) in many methods/types

## 1.0.2 - 14/04/2024

- (fix) Add typing to makeOptions

## 1.0.0 - 14/04/2024

- The first release of the project
