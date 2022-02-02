/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    stringarray = input.split('');
    zero = 0
    indices = []
    positions = {}
    finalstr = []
    for(let x of stringarray) {
        indices.push(zero);
        zero++;
    }
    for(let y in indices) {
        number = y;
        positions[y] = stringarray[y]
    }
    for(let element of shuffleIndices) {
        for(let z in positions) {
            if(element == z) {
                finalstr.push(positions[z]);
            }
        }
    }
    let f = finalstr.join('');
    return [f, finalstr];
};

let test1 = suffleString('llheo', [2,3,0,1,4])
console.log(test1[0])
console.log(test1[1])