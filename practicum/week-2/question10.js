/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    num = n
    numstring = num.toString().split('');
    sepnum = numstring.map(Number)
    console.log(sepnum)
    let max = 0;
    let min = sepnum[0];
    for(let element of sepnum) {
        if(element > max) {
            max = element;
        } 
    }
    return max, min;
};

let test1 = maxMinusMin(472)
console.log(test1)