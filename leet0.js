function reverseNum (num) {
    //we want to remove digits in num from the 1's place, and store them in the order we take them, which will reverse the order of the digits when they are recombined

    //recursive function to make digits in num ennumerable
    function ennumerable (input) {
            //if there is only 1 digit, return digit
        if (input % 10 === input ){
        return [input]}
            // grab the 1's digit with modulo, then get whats left without it, using division
        let digit = input % 10
        let divided = Math.floor(input / 10)

       let res = ennumerable(divided)
       let returnArr = []
       returnArr.push(digit)
       returnArr = returnArr.concat(res)
       return(returnArr)
    }

    let numArr = ennumerable(num);
    let finalRes = 0
    for (let i=0;i<numArr.length;i++){
        finalRes += (numArr.pop() * (10 ** i))
    }
    return finalRes
}

reverseNum(101)
reverseNum(101)
reverseNum(101)
reverseNum(101)


console.log(`the result of 4 is ${reverseNum(400)}`)
console.log(`the result of 121 is ${reverseNum(100000000000000000001)}`)
// console.log(`the result of 123 is ${reverseNum(321)}`)
// console.log(`the result of 100 is ${reverseNum(101)}`)


