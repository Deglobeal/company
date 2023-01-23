let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let Number = [Math.floor(Math.random() * 100)]

btn.addEventListener ('click', function() {
         let input = document.getElementById("userinput").value;
        if (input == Number) {
            output.innerHTML = 'You gessed right, Your number was right'
        } else if (input < Number) {
            output.innerHTML = "You gessed to low"
        }
         if (input > Number) {
            output.innerHTML = "You gessed too high"
        } 
    }); 