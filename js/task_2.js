var x = prompt("Enter a number: ", 0);

var check = true;

for (var i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
        alert("Number is not prime!");
        check = false;
        break;
    }
}
if (check) {
    alert("Number is prime!");
}