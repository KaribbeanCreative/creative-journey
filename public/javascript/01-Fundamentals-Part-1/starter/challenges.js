// CHALLENGES

// Coding Challenge #1
/*
Test data :
- Data 1 : Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
- Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

// Data 1 :
let massMark = 78, heightMark = 169;
let massJohn = 92, heightJohn = 195;

let heightMarkInMeter = 169 / 100;
let heightJohnInMeter = 195 / 100;

let bmiMark = 78 / (heightMarkInMeter * heightMarkInMeter);
let bmiJohn = 92 / (heightJohnInMeter * heightJohnInMeter);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark has a higher BMI (${bmiMark}) than John (${bmiJohn})`);
} else {
    console.log(`John has a higher BMI (${bmiJohn}) than Mark (${bmiMark})`);
}


// Data 2 :
let massMarkSecond = 95, heightMarkSecond = 188;
let massJohnSecond = 85, heightJohnSecond = 176;

let heightMarkInMeterSecond = 188 / 100;
let heightJohnInMeterSecond = 176 / 100;

let bmiMarkSecond = 95 / (heightMarkInMeterSecond * heightMarkInMeterSecond);
let bmiJohnSecond = 85 / (heightJohnInMeterSecond * heightJohnInMeterSecond);

if (bmiMarkSecond > bmiJohnSecond) {
    console.log("Mark's BMI is higher than John's !");
} else {
    console.log("John's BMI is higher than Mark's !");
}



// Coding Challenge #2

if (bmiMarkSecond > bmiJohnSecond) {
    console.log(`Mark's BMI (${bmiMarkSecond}) is higher than John's (${bmiJohnSecond}) !`);
} else {
    console.log("John's BMI (${bmiJohnSecond}) is higher than Mark's (${bmiMarkSecond}) !");
}



// Coding Challenge #3
/*
- Data 1 : Dolphins win (233.66 pts)
- Data 2 : Koalas win (245 pts)
- Data 3 : Dolphins win (242.66 pts)
*/

const scoreDolphins = 97 + 112 + 101 / 3;
const scoreKoalas = 109 + 95 + 106 / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins wins the trophy 🏆 with ${scoreDolphins} points`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas wins the trophy 🏆 with ${scoreKoalas} points`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`It's a draw ! Both win the competition 😎 : Dolphins have ${scoreDolphins} points and Koalas have ${scoreKoalas} points`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins < 100 && scoreKoalas < 100) {
    console.log(`It's a draw and they dont have 100 points ! No team win the trophy 😐`);
} else {
    console.log(`Error`);
}



// Coding Challenge #4
/*
Test data:
- Data 1: bill values 275 = 316.25
- Data 2: bill value 40 = 48
- Data 3: bill value 430 = 516
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
