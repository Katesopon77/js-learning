let x = [1,2,3,4,5];
let result = "";
for(let i = 0; i < x.length; i++) {
    result += x[i] + " ";
}
result += "\n"

for(let j = x.length-1; j >= 0; j--) {
    result += x[j] + " ";
}
console.log(result)