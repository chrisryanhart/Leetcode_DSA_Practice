/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 * 
 * 
 */

// 2nd version
var floodFill = function(image, sr, sc, color){
    const oldColor = image[sr][sc];
    let newColor = color;

    if(newColor === oldColor) return image;

    function fillCell(rowIdx,colIdx,oldColor){
        // base case
        if(rowIdx<0 || rowIdx >= image.length || colIdx < 0 || colIdx >= image[rowIdx].length || image[rowIdx][colIdx] !== oldColor) return;

        image[rowIdx][colIdx] = newColor;

        fillCell(rowIdx + 1, colIdx,oldColor);
        fillCell(rowIdx -1, colIdx,oldColor);
        fillCell(rowIdx, colIdx + 1,oldColor);
        fillCell(rowIdx, colIdx -1,oldColor);

        return;
    }

    fillCell(sr,sc,oldColor);

    return image;
}

// var floodFill = function(image, sr, sc, color) {
//     let cellStack = [];
//     let visitedCells = new Set();

//     let totalCol = image[sr].length;
//     let totalRow = image.length;

//     if(image[sr][sc] !== color){
//         cellStack.push([sr,sc]);
//         visitedCells.add([sr,sc]);

//     }else{
//         return image;
//     }

//     let originalColor = image[sr][sc];

//     while(cellStack.length){
//         let currCell = cellStack.pop();

//         image[currCell[0]][currCell[1]] = color;

//         visitedCells.add([currCell[0], currCell[1]]);

//         // check if each adjacent cell has been visited AND equal to the original color AND inbounds of the image array
//         let cellBelowPosition = [currCell[0]+1,currCell[1]];
//         let cellAbovePosition = [currCell[0]-1,currCell[1]];
//         let cellLeftPosition = [currCell[0],currCell[1]-1];
//         let cellRightPosition = [currCell[0],currCell[1]+1];
        

//         // have to check that the row is valid before testing the grid position
//         // otherwise, you'll get a typeError

//         if(!visitedCells.has(cellBelowPosition) && image[currCell[0]+1] && image[currCell[0]+1][currCell[1]] === originalColor){
//             cellStack.push([currCell[0]+1,currCell[1]]);
//             visitedCells.add([currCell[0]+1,currCell[1]]);
//         }

//         // have to check that the row is valid before testing the grid position
//         // otherwise, you'll get a typeError

//         if(!visitedCells.has(cellAbovePosition) && image[currCell[0]-1] && image[currCell[0]-1][currCell[1]] === originalColor){
//             cellStack.push([currCell[0]-1,currCell[1]]);
//             visitedCells.add([currCell[0]-1,currCell[1]]);
//         }

//         if(!visitedCells.has(cellRightPosition) && image[currCell[0]][currCell[1]+1] === originalColor){
//             cellStack.push([currCell[0],currCell[1]+1]);
//             visitedCells.add([currCell[0],currCell[1]+1]);
//         }

//         if(!visitedCells.has(cellLeftPosition) && image[currCell[0]][currCell[1]-1] === originalColor){
//             cellStack.push([currCell[0],currCell[1]-1]);
//             visitedCells.add([currCell[0],currCell[1]-1]);
//         }
//         console.log('test');
//     }

//     return image;

// };





module.exports = floodFill;