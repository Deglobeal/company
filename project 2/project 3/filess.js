// program is to print words from 1 to 100
// make it to print the number 
// print one that divisible by 3 
// print ones that are divisible 5 
// print for both

function fizzBuzz () {

    for (let i = 1; i <= 100; i++) {
        const  isMultipleOfThree = (i % 3) === 0
        const  isMultipleOfFive = (i % 5) === 0
        if (isMultipleOfThree && isMultipleOfFive){
            console.log("fizz buzz");
        }
        else if (isMultipleOfThree){
            console.log('fizz');
        } else if (isMultipleOfFive) {
            console.log('Buzz');
        }
            else {
            console.log(i)
        }
  }
}

fizzBuzz ()







