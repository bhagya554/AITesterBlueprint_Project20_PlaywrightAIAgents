/*
Loops: way to repeat a block of code multiple times
Types of loops:
for
while
do while
nested loops
for each
*/

let count1=1;
while(count1<=10){
    console.log(count1);
    count1++;
}

console.log("Using do-while loop");
do{
    console.log(count1);
    count1++;
}while(count1<=10);

console.log("Using for loop");
for(let count2=1;count2<=10;count2++){
    console.log(count2);
}

/*
while: when you don't know how many times the loop will run, it will run until the condition becomes false
do-while: similar to while loop but it will execute the block of code at least once, even if the condition is false
for: when you know how many times the loop will run, it consists of three parts: initialization, condition and increment/decrement
nested loops: a loop inside another loop
for each: used to iterate over arrays or collections, it executes a block of code for each element in the array or collection
*/

//Nested loops
console.log("Using nested loops");
for(let i=1;i<=2;i++){
    for(let j=1;j<=3;j++){
        console.log(`i:${i}, j:${j}`);
    }
}
//i:1, j:1
//i:1, j:2
//i:1, j:3
//i:2, j:1
//i:2, j:2
//i:2, j:3

let numA=1;
while(numA<2){
    for(let numB=1;numB<=3;numB++){
        let numC=1;
        do{
            console.log(`numA:${numA}, numB:${numB}, numC:${numC}`);
            numC++;
        }while(numC<=4);
    }
    numA++;
}

/*
numA:1, numB:1, numC:1
numA:1, numB:1, numC:2
numA:1, numB:1, numC:3
numA:1, numB:1, numC:4
numA:1, numB:2, numC:1
numA:1, numB:2, numC:2
numA:1, numB:2, numC:3
numA:1, numB:2, numC:4
numA:1, numB:3, numC:1
numA:1, numB:3, numC:2
numA:1, numB:3, numC:3
numA:1, numB:3, numC:4
*/

console.log("Using forEach loop");
const fruitNames=["apple","banana","orange"];
fruitNames.forEach((fru)=>{
console.log("I like: " + fru);
})

//we can also use forEach loop with index
fruitNames.forEach((fru,index)=>{
   console.log(`I like: ${fru} at index ${index}`);
})