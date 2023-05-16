const floodFill = require('./733-Flood-Fill.js');

describe('verify all cells flip',function(){
    it('flips all relevant cells',function(){
        let image = [[1,1,1],[1,1,0],[1,0,1]];
        let sr = 1;
        let sc = 1;
        let color = 2;

        let res = floodFill(image,sr,sc,color);

        console.log('test');

    });
    // it('should pass all one type to a new color',function(){
    //     let image = [[0,0,0],[0,0,0]];
    //     let sr = 1;
    //     let sc = 1;
    //     let color = 2;

    //     let res = floodFill(image,sr,sc,color);

    //     console.log('test');
    // });
});