let x = [1,1.9,"A"];
let result = "";

for(let i = 0; i < x.length; i++) {
    if(i == 0) {
        result += x[0] + "," + x[1] + "," + x[2] + "\n";
    }
    if(i == 1) {
        result += x[2] + x[0] + x[2] + "\n";
    }
    if(i == 2) {
        result += x[1] + "1";
    }
}

console.log(result)

