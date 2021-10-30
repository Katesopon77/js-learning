let x = ['H','e','l','o'];
let result = "";
let result2 = "";

for(let i = 0; i < x.length; i++) {
    if (i == 2) {
        result += x[i];
    }
    result += x[i];
}

for (let j = 0; j < result.length; j++) {
    result2 += result[j] + "\n";
    // console.log(result2)
}

console.log(result)
console.log(result2)