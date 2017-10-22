# Griffeath’s machine

### [Demo](https://bouvens.github.io/griffeath-machine/)

[![Example of step](https://bouvens.github.io/images/griffeath-machine.png)](https://bouvens.github.io/griffeath-machine/)

This experiment made with [state-control ![npm][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/state-control.png?style=flat-square
[npm]: https://www.npmjs.org/package/state-control

## What’s this?

A cyclic cellular automaton is a kind of cellular automaton rule developed by David Griffeath and studied by several other cellular automaton researchers.

More information and rules can be found in [Wikipedia](https://en.wikipedia.org/wiki/Cyclic_cellular_automaton).

## How it works?

On every step [every cell changes](https://github.com/bouvens/griffeath-machine/blob/master/src/utils.js) it’s value to neighbour’s value if it’s have modular value one unit larger.

```javascript
export const getUpdatedField = ({ field, width, height, states }) => _.map(
    field,
    (line, x) => _.map(line, (element, y) => {
        if (
            _(NEIGHBOURS)
                .map((direction) =>
                    field[mod(x + direction[0], width)][mod(y + direction[1], height)])
                .some((neighbour) => neighbour === mod(element + 1, states))
        ) {
            return mod(element + 1, states)
        }

        return element
    })
)
```

Neighbours by [default](https://github.com/bouvens/griffeath-machine/blob/master/src/constants.js) have the following offsets by _x_ and _y_ axes:

```javascript
export const NEIGHBOURS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
]
```

## How to run locally

Run in bash:
```Shell
git clone git@github.com:bouvens/griffeath-machine.git
cd griffeath-machine
npm run start
```

Also there’s a script for local build:
```Shell
npm run build
```

