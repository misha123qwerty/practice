let arr = [];

let n = prompt("Enter number of elements: ", 0);

for(var i = 0; i < n; i++){
    arr.push(prompt("Enter an element: ", 0));
}
let b = [];
let c = [];

let temp = 0;

for(i = 0; i < n; i++){
    temp = arr.shift();
    if(temp < 0){
        c.push(temp);
    }
    else if(temp > 0){
        b.push(temp);
    }
}
alert(b);
alert(c);