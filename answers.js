// javascript

//This function takes a string and returns the first character of the string. 

function firstCharacter (string) {
   return(string.substring(0,1));
};

// This function takes a string and returns the last character of a string

function lastCharacter (string) {
    var stringLength = string.length; 
    var lastChar = string.charAt(stringLength - 1); 
    return(lastChar);
};

//This function takes a string and a number, and returns the character at the position represented by the number. 

function characterPosition (string, number){
    return(string.charAt(number))
}
