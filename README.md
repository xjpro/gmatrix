# gmatrix

A simple library for geometrically manipulating matrices

### Install

```
npm install gmatrix
```

### Usage

```js
const gmatrix = require("gmatrix");

const myMatrix = gmatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
// myMatrix is now equipped with with geometric functions detailed below
```


```js
const json = matrix.toJSON();
// json is a two dimensional array of the matrix
```

```js
const clone = matrix.clone();
// clone is a new matrix that's a copy of the original
```

```js
matrix.forEach((row, rowIndex) => {
  // do something with row of elements
  // also given row's index
});
```

```js
matrix.forEachElement((element, rowIndex, columnIndex) => {
  // do something with element
  // also given element's row and column indices
});
```

```js
const rotatedMatrix = matrix.rotateLeft();
// rotatedMatrix is a new matrix rotated 90 degrees to the left
```

```js
const rotatedMatrix = matrix.rotateRight();
// rotatedMatrix is a new matrix rotated 90 degrees to the right
```

```js
const rotatedMatrix = matrix.rotate180();
// rotatedMatrix is a new matrix rotated 180 degrees
```

```js
const flippedMatrix = matrix.flipHorizontal();
// flippedMatrix is a new matrix flipped over the horizontal axis
```

```js
const flippedMatrix = matrix.flipVertical();
// flippedMatrix is a new matrix flipped over the vertical axis
```
