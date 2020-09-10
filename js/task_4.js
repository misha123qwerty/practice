var x = prompt("Enter the number: ", 0);

var ans = 0;
var num = x.length;

for (var i = 0; i < num; i++) {
    ans = ans * 10 + (x % 10);
    x = Math.floor(x /= 10);
}
alert(ans);