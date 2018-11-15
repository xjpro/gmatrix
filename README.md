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
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
]);
// myMatrix is now equipped with the geometric functions detailed below
```

#### toJSON
```js
const json = myMatrix.toJSON();
// json is a two dimensional array of the matrix
```
#### width
```js
const width = myMatrix.width();
// width is 5
```
#### height
```js
const height = myMatrix.height();
// height is 5
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
const sub = myMatrix.subMatrix(5, 2, 2);
// sub is a new 2x2 matrix starting from index 4
// [[5, 6],
//  [10, 11]]
```
#### surrounding
```js
const surrounding = myMatrix.surrounding(12);
// surrounding is a new 3x3 matrix containing the elements that surrounded index 4
// [[6, 7, 8],
//  [11, 12, 13],
//  [16, 17, 18]]
```
#### forEach
```js
myMatrix.forEach((element, index, rowIndex, columnIndex) => {
  // do something with element
  // also given element's index, row index, and column index
});
```
#### forEachRow
```js
myMatrix.forEachRow((row, rowIndex) => {
  // do something with row of elements
  // also given row's index
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
