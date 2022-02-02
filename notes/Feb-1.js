// input: 'abaabbabab'

// another partition: 'aba', 'ab', 'baba', 'b'

// Here is how you can use the utility fucntion allPartitions:
for (let partition of allPartitions("aba")) {
    console.log(partition)
}

var maxBalanceNumber = function(input) {
    //1. itereate through all paritions
    //2. for each partition calculate its balance number : to do that iterate over the
    //substrings of the partition and check whether each substring has equal number of a's and b's
    //3. Find the max of all the balance number by putting them in an array and doing a max function lol
    let max = 0;
    for (let parition of allPartitions(input)) { //calculate the balance number of partition
        let balanceNumber = 0;
        for(let substring of partition) { //check whether the substring is balanced or not
            let count = 0;
            for(let letter of substring) {
                if(letter === 'a') {
                    count++;
                } else if(letter === 'b') {
                    count--;
                } else { // if the string does not consist of a and bs
                    throw Error('The input string is not valid because it contains letters other than a or b');
                }
            }
            if(count === 0) {
                balanceNumber++;
            }
        }
        if(balanceNumber > max) {
            max = balanceNumber;
        }
    }
    return max;
};



