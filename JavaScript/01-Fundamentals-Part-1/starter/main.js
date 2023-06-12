/*alert(`Hello Dope !`);

let javascript = "amazing";
if (javascript !== "amazing") alert("Js Boss !");

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);*/



// CODING CHALLENGE #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula :
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks :
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */

// Data 1 :
/*const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / (heightMark ** 2);

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / (heightJohn ** 2);
console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);*/


// Data 2 :
/*const massMarkTwo = 95;
const heightMarkTwo = 1.88;
const bmiMarkTwo = massMarkTwo / heightMarkTwo ** 2;
console.log(bmiMarkTwo);

const massJohnTwo = 85;
const heightJohnTwo = 1.76;
const bmiJohnTwo = massJohnTwo / heightJohnTwo ** 2;
console.log(bmiJohnTwo);

const markHigherBMITwo = bmiMarkTwo > bmiJohnTwo;
console.log(markHigherBMITwo);*/


// Data 3 :
/*const massDope = 93;
const heightDope = 1.65;
const bmiDope = massDope / heightDope ** 2;
console.log(bmiDope);*/



// CODING CHALLENGE #2
/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀 */

/*if (bmiMark > bmiJohn) {
   console.log(`L'IMC de Mark (${bmiMark}) est supérieur à celui de John (${bmiJohn}).`);
} else {
   console.log(`L'IMC de John (${bmiJohn}) est supérieur à celui de Mark (${bmiMark}).`);
}*/



// CODING CHALLENGE #3
/* There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!*/

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score.
// 3. Bonus 1: 
// Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
//4. Bonus 2:
//Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

/*Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀 */

// Average calcul
/*const averageDolphins = (96 + 108 + 89) / 3
const averageKoalas = (88 + 91 + 110) / 3
console.log(`The Dolphin average is ${averageDolphins} and the Koala average is ${averageKoalas}`);*/

// Comparison average
/*if (averageDolphins > averageKoalas) {
   console.log(`The winner of the competition is the Dolphins with an average ${averageDolphins}`);
} else if (averageDolphins < averageKoalas) {
   console.log(`The winner of the competition is the Koalas with an average ${averageKoalas}`);
} else if (averageDolphins === averageKoalas) {
   console.log(`It's a draw : ${averageDolphins}, ${averageKoalas}. No team wins the trophy`);
} else {
   console.log(`Error !`)
}*/

// Bonus 1 :
/*const bonusAverageDolphins = (97 + 112 + 101) / 3
const bonusAverageKoalas = (109 + 95 + 123) / 3
console.log(`The Dolphin average is ${bonusAverageDolphins} and the Koala average is ${bonusAverageKoalas}`);

if (bonusAverageDolphins >= 100 && bonusAverageDolphins > bonusAverageKoalas) {
   console.log(`The winner of the competition is the Dolphins with an average ${bonusAverageDolphins}`);
} else if (bonusAverageDolphins >= 100 && bonusAverageDolphins < bonusAverageKoalas) {
   console.log(`The winner of the competition is the Koalas with an average ${bonusAverageKoalas}`);
} else if (bonusAverageDolphins === bonusAverageKoalas && bonusAverageDolphins >= 100 && bonusAverageKoalas >= 100) {
   console.log(`It's a draw : ${bonusAverageDolphins}, ${bonusAverageKoalas}. No team wins the trophy`);
} else {
   console.log(`Error !`);
}*/

// Bonus 2 :
/*const averageDolphinsBonus = (97 + 112 + 101) / 3
const averageKoalasBonus = (109 + 95 + 106) / 3
console.log(`The Dolphin average is ${bonusAverageDolphins} and the Koala average is ${bonusAverageKoalas}`);

if (averageDolphinsBonus >= 100 && averageDolphinsBonus > averageKoalasBonus) {
   console.log(`The winner of the competition is the Dolphins with an average ${averageDolphinsBonus}`);
} else if (averageDolphinsBonus >= 100 && averageDolphinsBonus < averageKoalasBonus) {
   console.log(`The winner of the competition is the Koalas with an average ${averageKoalasBonus}`);
} else if (averageDolphinsBonus === averageDolphinsBonus && averageDolphinsBonus >= 100 && averageDolphinsBonus >= 100) {
   console.log(`It's a draw : Dolphins average is ${averageDolphinsBonus} and Koalas avarage is ${averageDolphinsBonus}. No team wins the trophy`);
} else {
   console.log(`Error !`);
}*/



// CODING CHALLENGE #4
/*Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.*/

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430
/*Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀*/

// Task 1 :
const bill = 275;
const bill1 = 40;
const bill2 = 430;

// ternary
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;

const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2 ;

const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2 ;

// Task 2 :
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);

console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);