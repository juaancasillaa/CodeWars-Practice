// Problem:

//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
//If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


//Pseudocode:
// 1.- Write a function.
// 2.- Create an if statement that would check if one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love,
// returning true is they are in lovefunc, otherwise false. 



// Solution:

function lovefunc(flower1, flower2){

  if (flower1 % 2 === 0 && flower2 % 2 === 1) {

    return true;

  } else if (flower2 % 2 === 0 && flower1 % 2 === 1){

    return true;

  } else {

    return false;

  }
}

console.log(lovefunc(1,4));
console.log(lovefunc(2,2));
console.log(lovefunc(0,1));
console.log(lovefunc(0,0));

