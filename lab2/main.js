// Task 4.1 (12 варіант)
function calculateZ(x) {
    return (6 * x + 4) / (Math.sin(3 * x) - x);
}

// Варіант (a)
console.log("[Task 4.1] Варіант (a):");
for (let x = 2.3; x <= 7.8; x += 0.9) {
    console.log(`x = ${x.toFixed(2)}, z = ${calculateZ(x).toFixed(4)}`);
}

// Варіант (b)
console.log("\nВаріант (b):");
let x = 2.8;
for (let i = 0; i < 6; i++) {
    console.log(`x = ${x.toFixed(2)}, z = ${calculateZ(x).toFixed(4)}`);
    x += 0.3;
}

// Task 5.1(Варіант 12)
console.log("Task 5.1:");
function calculateY(l, k) {
    let sum = 0;
    for (let n = l; n <= k; n++) {
        sum += (n ** 2 - n) / (n ** 2 + n + 6);
    }
    return sum;
}

function calculateP(lStart, lEnd) {
    let product = 1;
    for (let l = lStart; l <= lEnd; l++) {
        product *= l * Math.exp(-l + 2);
    }
    return product;
}

let yValue = calculateY(3, 17);
let pValue = calculateP(3, 10);

console.log("y =", yValue);
console.log("p =", pValue);


let D = [1.2, 25.3, -2.3, -3.1, 0.0];

console.log("Кількість від'ємних елементів:", countNegativeElements(D));

// Діаграма (12 варіант)
console.log("Діаграма (12 варіант):");
function countNegativeElements(arr) {
    let count = arr.filter(num => num < 0).length;
    return count;
}

let countries = [
    {
        name: "Україна",
        capital: "Київ",
        governmentType: "Республіка"
    },
    {
        name: "Франція",
        capital: "Париж",
        governmentType: "Республіка"
    },
    {
        name: "Японія",
        capital: "Токіо",
        governmentType: "Конституційна монархія"
    }
];

countries.forEach(country => {
    console.log(`Назва: ${country.name}, Столиця: ${country.capital}, Вид управління: ${country.governmentType}`);
});
