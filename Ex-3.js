let a = [2,3,45,60,1500];
let result ="";
for (let i = 0; i < a.length; i++) {
    // result = result + a[i] + " ";
    result += a[i] + " ";
    if(i == 2) result += "\n";
}
console.log(result);
