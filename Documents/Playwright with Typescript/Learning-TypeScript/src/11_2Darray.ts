const arr:number[][] = [
    [20,45,12],
    [25,90,56]
]

console.log(arr[1][1]); //90

console.log("No. of rows in this 2d array: ",arr.length);

for(let row=0;row<arr.length;row++){
    for(let col=0;col<arr[row].length;col++){
        console.log(arr[row][col]);
    }
    console.log("End of row " + row);
}