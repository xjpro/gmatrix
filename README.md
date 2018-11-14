# gmatrix
A simple library for geometrically manipulating matrices

### Install
```
npm install gmatrix
```

### Usage

For Node:
```js
const matrix = require("gmatrix");
```

For browsers:
```html
<script src="/node_modules/gmatrix/dist/gmatrix.min.js"></script>
```

In either case, create a matrix:
```js
const myMatrix = matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
// myMatrix is now equipped with the geometric functions detailed below
```

#### toJSON
```js
const json = myMatrix.toJSON();
// json is a two dimensional array of the matrix
```
#### equals
```js
const a = matrix([
  [1, 2],
  [3, 4]
]);
const b = matrix([
  [5, 6],
  [7, 8]
]);
const equality = a.equals(b);
// false
```
#### clone
```js
const clone = myMatrix.clone();
// clone is a new matrix that's a copy of the original
```
#### subMatrix
```js
const sub = myMatrix.subMatrix(4, 2, 2);
// sub is a new matrix with 2x2 dimensions starting at position 4 of the original
// [[5, 6],
//  [8, 9]]
```
#### forEach
```js
myMatrix.forEach((row, rowIndex) => {
  // do something with row of elements
  // also given row's index
});
```
#### forEachElement
```js
myMatrix.forEachElement((element, rowIndex, columnIndex) => {
  // do something with element
  // also given element's row and column indices
});
```
#### rotateLeft
```js
const rotatedMatrix = myMatrix.rotateLeft();
// rotatedMatrix is a new matrix rotated 90 degrees to the left
```
#### rotateRight
```js
const rotatedMatrix = myMatrix.rotateRight();
// rotatedMatrix is a new matrix rotated 90 degrees to the right
```
#### rotate180
```js
const rotatedMatrix = myMatrix.rotate180();
// rotatedMatrix is a new matrix rotated 180 degrees
```
#### flipHorizontal
```js
const flippedMatrix = myMatrix.flipHorizontal();
// flippedMatrix is a new matrix flipped over the horizontal axis
```
#### flipVertical
```js
const flippedMatrix = myMatrix.flipVertical();
// flippedMatrix is a new matrix flipped over the vertical axis
```
