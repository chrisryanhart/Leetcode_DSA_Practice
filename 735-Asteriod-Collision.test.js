const asteroidCollision = require('./735-Asteriod-Collision');


describe('shows final asteroid list', function(){
    it('removed collided asteroids', function(){
        let roids = [-2,-1,1,2];

        let res = asteroidCollision(roids);

        console.log(res);
    });
});