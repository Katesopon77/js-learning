let a = 1;
let b = 2;
let c;
let d;
let e;
let f;
let g;

function sum(a,b) {
    c = a + b;
    d = a + a;
    e = c - d;
    f = d - e;
    g = (a + b) - 2;
}
sum(a,b);

console.log(`${a} + ${b} = ${c}`);
console.log(`${a} + ${a} = ${d}`);
console.log(`${c} - ${d} = ${e}`);
console.log(`${d} - ${e} = ${f}`);
console.log(`${a} + ${b} - 2 = ${g}`);

