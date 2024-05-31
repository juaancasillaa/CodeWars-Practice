// PROBLEM
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// Pseudocode

// 1. Write an function to call disemwoel
// 2. Create an variable with an empty string that would containg the new word without the vowels
// 3. Use a for loop that would iterate across the string.
// 4. Use an if statement taht would check for any vowel letter.

// SOLUTION WITH METHODS

function disemvowel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(disemvowel("Hello WOrld"));

// SOLUTION WITHOUT METHODS

function disemvowel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'A' && str[i] !== 'e' && str[i] !== 'E' && str[i] !== 'i' && str[i] !== 'I' && str[i] !== 'o' && str[i] !== 'O' && str[i] !== 'u' && str[i] !== 'U') {
            newStr += str[i];
        }
    }
    return newStr;
}