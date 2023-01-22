// this is to state the variable 

// using for loop to set out the commands 

let y = [2, 5, 7, 8, 66, 89, 68, 90, 23, 89, 78, 67, 88, 90, 67, 66, 56, 45, 44, 43, 24, 64, 88, 34]


function sumOfEven(Number) {
    let EvenNumbers = [];
    for(let i = 0; i < Number.length;i++) {
        Number[i] % 2 === 0? EvenNumbers.push(Number[i]) : 0
    }
    return EvenNumbers.reduce((a, b) => a + b, 0)
}

console.log(sumOfEven(y));

 