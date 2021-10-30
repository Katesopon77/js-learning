let a = 4;
let b = 5;
let c;
let d;
let e;
let f;

function sum(a,b) {
    c = a + b;
    d = a + a;
    e = c - d;
    f = d - e;
}
sum(a,b);

console.log(`${a} + ${b} = ${c}`);
console.log(`${a} + ${a} = ${d}`);
console.log(`${c} - ${d} = ${e}`);
console.log(`${d} - ${e} = ${f}`);

