// Task 1 (12)
let z = 6.5;
let q = -1;

if (z !== 6.5 || z * q >= 2) {
    console.log("Умова виконується");
} else {
    console.log("Умова не виконується");
}

// Task 2 (12)
const alpha = 4.4;
const beta = 1.87;
const pi = Math.PI;
const e = Math.E;

let a = Math.sqrt(Math.abs(pi - beta)) + Math.sin(pi * alpha) ** 2 + 1.67;

let y = Math.tan((beta - 1) ** 2) ** 4 - 0.035;

let x = 1 / Math.tan((alpha - 1) / e + 2 ** ((alpha + 1) / 2));

console.log("a =", a);
console.log("y =", y);
console.log("x =", x);



// Task 3 (12)
function calculateY(x) {
    const pi = Math.PI;
    const e = Math.E;
    let y;

    if (x < -1) {
        y = Math.acos(2 / (pi - x));
    } else if (Math.abs(x) < 1) {
        y = Math.exp(-(x ** 2));
    } else if (x > 1) {
        y = pi * (Math.log(x) ** 2);
    } else if (Math.abs(x) === 1) {
        y = 10 ** -3;
    }

    return y;
}

let testValues = [-2, -0.5, 2, 1, -1];
testValues.forEach(x => {
    console.log(`x = ${x}, y = ${calculateY(x)}`);
});


// Task 4 (12)
function calculateZ(x) {
    return (6 * x + 4) / (Math.sin(3 * x) - x);
}

console.log("Випадок (a):");
for (let xa = 2.3; xa <= 7.8; xa += 0.9) {
    console.log(`x = ${xa.toFixed(2)}, z = ${calculateZ(xa)}`);
}

console.log("\nВипадок (b):");
let xb = 2.8;  //
for (let i = 0; i < 6; i++) {
    console.log(`x = ${xb.toFixed(2)}, z = ${calculateZ(xb)}`);
    xb += 0.3;
}


// Task 5 (12)

function calculateY(k) {
    let sum = 0;
    for (let n = 1; n <= k; n++) {
        sum += (n ** 2 - n) / (n ** 2 + n + 6);
    }
    return sum;
}

function calculateP(lStart, lEnd) {
    let product = 1;
    for (let l = lStart; l <= lEnd; l++) {
        product *= Math.E ** (-l + 2);
    }
    return product;
}

const k = 17;
const lStart = 3;
const lEnd = 10;

let resultY = calculateY(k);
let resultP = calculateP(lStart, lEnd);

console.log("y =", resultY);
console.log("p =", resultP);
