# gmatrix
A simple library for geometrically manipulating matrices

### Install
```
npm install gmatrix
```

### Usage
```js
const gmatrix = require("gmatrix");

const matrix = gmatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
// matrix is now equipped with the geometric functions detailed below
```
#### toJSON
```js
const json = matrix.toJSON();
// json is a two dimensional array of the gmatrix
```
#### clone
```js
const clone = matrix.clone();
// clone is a new gmatrix that's a copy of the original
```
#### forEach
```js
matrix.forEach((row, rowIndex) => {
  // do something with row of elements
  // also given row's index
});
```
#### forEachElement
```js
matrix.forEachElement((element, rowIndex, columnIndex) => {
  // do something with element
  // also given element's row and column indices
});
```
#### rotateLeft
```js
const rotatedMatrix = matrix.rotateLeft();
// rotatedMatrix is a new gmatrix rotated 90 degrees to the left
```
#### rotateRight
```js
const rotatedMatrix = matrix.rotateRight();
// rotatedMatrix is a new gmatrix rotated 90 degrees to the right
```
#### rotate180
```js
const rotatedMatrix = matrix.rotate180();
// rotatedMatrix is a new gmatrix rotated 180 degrees
```
#### flipHorizontal
```js
const flippedMatrix = matrix.flipHorizontal();
// flippedMatrix is a new gmatrix flipped over the horizontal axis
```
#### flipVertical
```js
const flippedMatrix = matrix.flipVertical();
// flippedMatrix is a new gmatrix flipped over the vertical axis
```
