/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {

    let stack = [];

    for(let i=0; i<asteroids.length; i++){
        let stackDirection;
        if(stack.length){
            stackDirection = stack[stack.length-1]/Math.abs(stack[stack.length-1]);
        } 

        let asteroidsDirection = asteroids[i]/Math.abs(asteroids[i]);

        let oppositeDirection = false;
        if(stackDirection < 0 && asteroidsDirection > 0) oppositeDirection = true;

        // add asteroid to stack if empty
        if(stack.length === 0){
            stack.push(asteroids[i]);
        }else if(stackDirection === asteroidsDirection || oppositeDirection){
            // asteroids moving in different direction
            stack.push(asteroids[i]);
        }else{
            // both moving same direction
            if(Math.abs(asteroids[i]) >= Math.abs(stack[stack.length-1])){

                // have to handle both
                let removed;
                let removedPair = false;

                // remove all objects that collide
                while(!removedPair && stack.length && stackDirection !== asteroidsDirection && Math.abs(asteroids[i]) >= Math.abs(stack[stack.length-1])){
                    removed = stack.pop();

                    if(Math.abs(removed) === Math.abs(asteroids[i])){
                        removedPair = true;
                    }

                    // need to check if opposite directions each time
                    stackDirection = stack[stack.length-1]/Math.abs(stack[stack.length-1]);
                    asteroidsDirection = asteroids[i]/Math.abs(asteroids[i]);
                }

                // confirm no pair removed
                if(!removedPair){
                    // add if both the same direction
                    // don't add if going opposite direction
                    // if the stack item abs is bigger, don't add to the stack
                    if(stack.length === 0 || stackDirection === asteroidsDirection){
                        stack.push(asteroids[i]);
                    }
                }
            }
            // otherwise pass to next item in asteroids
        }
    }

    return stack;
};

module.exports = asteroidCollision;