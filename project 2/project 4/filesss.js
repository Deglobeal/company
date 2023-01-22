 
    
function vowelCount(str1) {

var vowelList = "aeiouAEIOU";
var vowelCounts = 0;

// using for to set the command for the index operation 

for (var i = 0; i < str1.length; i++) {

    if (vowelList.indexOf(str1[i]) !== -1) {
          vowelCounts +=  1;
    }
}

return vowelCounts;

}
console.log(vowelCount( "aeuioaeuioaeuio ghfhddjkfdjfdgkdgjkdgndg"));

