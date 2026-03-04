/*
Array stores multiple values in a single variable.
It is a data structure that can hold a fixed number of values of the same type.
Each value in an array is called an element, 
and each element is identified by its index, which starts at 0.
The length of an array is the number of elements it contains.
*/

var rollNos:number[]=[11,22,33,44,55];
for(let index=0;index<rollNos.length;index++){
    console.log(rollNos[index]);
}

console.log("5 random values between 0(inclusive) and 100(exclusive):");
const randomValues:number[]=new Array(5);
//Using for loop to generate 5 random values between 0 (inclusive) and 100 (exclusive) and store them in the array
for(let index=0;index<randomValues.length;index++){
    randomValues[index]=Math.floor(Math.random()*100);
    console.log(randomValues[index]);
}

//Using forEach loop to iterate over the array and print the values
console.log("Using forEach loop to print the random values:");
randomValues.forEach((value,index)=>
    {
    console.log("values of number at index " +index + " is: " + value)
    })

//Using for with of loop to iterate over the array and print the values
console.log("Using for with of loop to print the random values:");
for(let rv of randomValues){
    console.log(rv);
}

console.log("Printing the random values in reverse order:");
for(let index=randomValues.length-1;index>=0;index--){
 console.log(randomValues[index]);
}