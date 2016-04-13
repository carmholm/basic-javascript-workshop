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
    return(string.charAt(number));
}

//This function takes two numbers and adds them together. Test your function on a few inputs. 
//When you pass a string instead of a number, it returns a string. 

function sum (num1, num2){
    return(num1 + num2);
}

//This function takes two numbers and multiplies them together. 
//When you pass something other than a number to the function, it returns NaN.

function product (num1, num2){
    return(num1*num2);
}

//This function takes two numbers and a string. If the string is ‘add’, it returns the sum of the numbers. If the string is ‘subtract’, it returns the difference. If the string is ‘mult’, it returns the product. If the string is ‘div’, it returns the ratio. Otherwise it returns 0.

function exerciseSix (num1, num2, string){
    if (string === "add"){
        return(num1 + num2);
    }
    else if (string === "subtract"){
        if (num1 > num2){
            return(num1 - num2)
        }
        else {
        return(num2 - num1);
        }
    }
    else if (string === "mult"){
        return(num1*num2);
    }
    else if (string === "div"){
        return(num1/num2);
    }
    else {
        return(0);
    }
}

//This function takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.

function stringTimesNumber (string, number){
    return(string.repeat(number));
}

//This function takes a string, and returns the reverse of the string.

function reverse(string){
    return(string.split("").reverse().join(""));
}

//This function takes a number and returns the factorial of a number.

function factorial(number){
    if (number === 0 || number === 1){
        return(1);
    }
    else {
        return(number * factorial(number - 1));
    }
}

// This function takes a phrase as a string, and returns the longest word in that phrase.

function longestWord (string){
   var strArr = string.split(' ');
   var longest = '';
   for (var i = 0; i < strArr.length; i++){
    if (strArr[i].length > longest.length) {
        longest = strArr[i];
    }   
   }
   return longest;
}

//This function takes a phrase and returns the same phrase with every word capitalized. 

function capitalizeEveryWord (string){
    var lowerCaseArr = string.toLowerCase().split(' ');
    var upperCaseArr = [];
    for(var i = 0; i < lowerCaseArr.length; i++){
        var guy = lowerCaseArr[i].charAt(0).toUpperCase() + lowerCaseArr[i].substring(1);
        upperCaseArr.push(guy);
    }
    return upperCaseArr.join(' ');
}

//Write a function that takes an array and returns the largest number of the array.

function largestNumber(array){
    var largest = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}

// This function takes an array, and returns a filtered array.

function truthyValues (array){
    return array.filter(function(values){
        if(values > 1){
            return  true;
        }
    })
}
