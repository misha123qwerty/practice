var a = prompt("Enter a: ", 0);
var b = prompt("Enter b: ", 0);
var c = prompt("Enter c: ", 0);

var D = b * b - 4 * a * c;

if (D > 0) {
    var x1 = (Math.sqrt(D) - b) / (2 * a);
    var x2 = (-Math.sqrt(D) - b) / (2 * a);
    alert("x1 = " + x1 + "\nx2 = " + x2);
}
else if (D === 0) {
    alert("x = " + (-b / (2 * a)));
}
else {
alert("x cannot be found");
}