# Griffeath’s machine

### [Demo](https://bouvens.github.io/griffeath-machine/)

[![Example of step](https://bouvens.github.io/images/griffeath-machine.png)](https://bouvens.github.io/griffeath-machine/)

This experiment made with [state-control ![npm][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/state-control.png?style=flat-square
[npm]: https://www.npmjs.org/package/state-control

## What’s this?

A cyclic cellular automaton is a kind of automaton rule invented by David Griffeath and studied by several other researchers.

You can find more information and rules in [Wikipedia](https://en.wikipedia.org/wiki/Cyclic_cellular_automaton).

Rendering is made with high performance method `CanvasRenderingContext2D.putImageData()` with typed arrays and some bitwise magic inside React component [`<CanvasField />`](https://github.com/bouvens/griffeath-machine/blob/master/src/components/optimized/CanvasField.jsx).

## How it works?

On every step [every cell changes](https://github.com/bouvens/griffeath-machine/blob/master/src/utils.js) its value to make it equal to a neighbor’s value if it has modular value one unit larger.

## How to run locally

Run in bash:
```bash
git clone git@github.com:bouvens/griffeath-machine.git
cd griffeath-machine
npm install
npm start
```

Also, there’s a script for a local build:
```bash
npm run build
```
