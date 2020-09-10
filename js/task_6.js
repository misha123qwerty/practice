let arr = [];

let n = prompt("Enter number of elements: ", 0);

for(var i = 0; i < n; i++){
    arr.push(prompt("Enter an element: ", 0));
}

arr.sort((a, b) => a - b);

let index = 0;
let temp = arr[0];
let ans = "";

for(let i = 0; i < arr.length; i++){
    if(temp == arr[i]){
        index++;
    }
    else {
        ans += temp + " - " + index + ", ";
        temp = arr[i];
        index = 1;
    }
}
ans += temp + " - " + index;
alert(ans);