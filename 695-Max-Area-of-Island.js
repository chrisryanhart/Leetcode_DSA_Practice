/**
 * @param {number[][]} grid
 * @return {number}
 */

// attempt 3
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let seen = new Set();

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
                if(grid[i][j] === 1){

                    function findArea(i,j){
                        let cell = `${i}${j}`;
                        // base case
                        // check if coordinates are out of bounds
                        // if(!grid[i]) return 0;
                        // if(!grid[i][j]) return 0;
                        if(i<0 || j<0 || i>=grid.length || j>= grid[0].length || !grid[i][j]) return 0;
                        if(seen.has(cell)) return 0;
                    
                        // normal case
                        // area++;
                        // similar to setting the cell to zero
                        grid[i][j] = 0;

                    
                        // check for ones in adjacent cells
                        let above = findArea(i-1,j);
                        let below = findArea(i+1,j);
                        let right = findArea(i,j+1);
                        let left = findArea(i,j-1);
                    
                        let area = 1 + left + right + above + below;
                    
                        return area;
                    }

                    let res = findArea(i,j);
                    max = Math.max(res,max);
                }
        }
    }
    return max;    
};

// 2nd attempt
var maxAreaOfIsland = function(grid) {
    let max = 0;
    let seen = new Set();

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            let cell = `${i}-${j}`;
            if(!seen.has(cell)){
                if(grid[i][j] === 0){
                    seen.add(cell);
                }else{
                    // find the max area
                    function findArea(y,x){
                        let cell = `${y}-${x}`;
                        // base case
                        // check if coordinates are out of bounds
                        // if(!grid[i]) return 0;
                        // if(!grid[i][j]) return 0;
                        if(y<0 || x<0 || y>=grid.length || x>= grid[0].length || !grid[y][x]) return 0;
                        if(seen.has(cell)) return 0;
                    
                        // normal case
                        // area++;
                        // similar to setting the cell to zero
                        seen.add(cell);
                    
                        // check for ones in adjacent cells
                        let above = findArea(y-1,x);
                        let below = findArea(y+1,x);
                        let right = findArea(y,x+1);
                        let left = findArea(y,x-1);
                    
                        let area = 1 + left + right + above + below;
                    
                        return area;
                    }

                    let res = findArea(i,j);
                    max = Math.max(res,max);
                }
            }
        }
    }
    return max;
};

var maxAreaOfIsland = function(grid) {
    let ans = 0, n = grid.length, m = grid[0].length
    const trav = (i, j) => {
        if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
        grid[i][j] = 0
        return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
    }
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < m; j++)
            if (grid[i][j]) ans = Math.max(ans, trav(i, j))
    return ans
};


module.exports = maxAreaOfIsland;