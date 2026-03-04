//if-else if-else syntax
/*
if(condition){
    //code to execute if condition is true
}   else if(anotherCondition){
    //code to execute if anotherCondition is true
}   else{
    //code to execute if all conditions are false
}
*/
    const randomNumber=Math.floor(Math.random()*10);
    console.log(`Random number between 0 and 9: ${randomNumber}`);
    if(randomNumber<5){
        console.log("The number is less than 5");
    }
    else if(randomNumber===5){
        console.log("The number is equal to 5");
    }
    else{
        console.log("The number is greater than 5");
    }
//switch syntax
/*
switch(expression){
    case value1:
        //code to execute if expression matches value1
        break;
 */
const randomValue = Math.floor(Math.random()*5);
switch(randomValue){
    case 0:
        console.log("The value is ZERO:" + randomValue);
        break;
    case 1:
        console.log("The value is ONE:" + randomValue);
        break;
    case 2:
        console.log("The value is TWO:" + randomValue);
        break;
    case 3:
        console.log("The value is THREE:" + randomValue);
        break;
    default:
        console.log("The value is FOUR:" + randomValue);
        break;

}