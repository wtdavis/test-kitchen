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
       console.log(returnArr)
       return(returnArr)
    }

    return ennumerable(num)
}

console.log(`the result of 4 is ${reverseNum(4)}`)
console.log(`the result of 121 is ${reverseNum(121)}`)
console.log(`the result of 123 is ${reverseNum(321)}`)
console.log(`the result of 100 is ${reverseNum(100)}`)


