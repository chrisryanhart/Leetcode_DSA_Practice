const moveZeroes = require('./283-Move-Zeroes.js');

describe('must move all zeroes to the end', function(){
    it('moves numbers with a zero to the end', function(){
        let nums = [0,1,0,3,12];

        let res = moveZeroes(nums);

        console.log('test');
        expect(res).toEqual([1,3,12,0,0])
        
    });
    it('handles only one element', function(){
        let nums =[0];

        let res = moveZeroes(nums);

        expect(res).toEqual([0]);
    })
})