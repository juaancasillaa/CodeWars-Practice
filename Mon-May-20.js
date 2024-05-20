//PROBLEM 1:

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 23  --> "123"
// 999  --> "999"
// -100 --> "-100"

//SOLUTION:

function numberToString(num) {
    return num.toString();
  }
  
console.log(numberToString(123));
console.log(numberToString(999));
console.log(numberToString(-100));


// PROBLEM 2:

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. 
// In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// SOLUTION: 

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
  
  console.log(DNAtoRNA("GCAT"));