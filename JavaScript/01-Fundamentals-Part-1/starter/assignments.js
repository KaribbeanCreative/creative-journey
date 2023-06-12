// LECTURE: Values and Variables

/* 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions) */
// 2. Log their values to the console

/*const country = 'Guadeloupe';
console.log(country);

const continent = 'Amerique centrale';
console.log(continent);

let population = 383559;
console.log(population);*/



// LECTURE: Data Types

/* 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet */
/* 2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console */

/*const isIsland = true;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);*/



// LECTURE: let, const and var

/* 1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens*/

/*const language = 'creole';
console.log(typeof language);*/



// LECTURE: Basic Operators

/* 1. If your country split in half, and each half would contain half the population, then how many people would live in each half ?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'*/

/*const splitInHalf = population / 2;
console.log(`Chaque moitié de l'ile aurait ${splitInHalf} d'habitants`);

let increaseByOne = population + 1;
console.log(increaseByOne);

const finland = 6000000;

if (finland >= 383559){
   console.log('La population de la Finlande est plus importante que celle de la Guadeloupe')
} else {
   console.log('La population de la ' + country + ' est plus importante que celle de la Finlande')
}

const averagePopulation = 33000000;

if (averagePopulation >= 383559){
   console.log('La moyenne de la population de la ' + country + ' est plus faible que ' + averagePopulation);
} else {
   console.log('La ' + country + 'dépasse la moyenne de population maximale')
}

const pays = 'Portugal';
const continentNew = 'Europe';
let populationNew = 11000000;
const languageNew = 'portuguais';

const description = 'Le ' + pays + ' est en ' + continentNew + ', et ses ' + populationNew + " d'habitants parlent " + languageNew + '.';
console.log(description);*/



// LECTURE: Strings and Template Literals

/* 1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

/*console.log(`Le ${pays} est en ${continentNew}, et ses ${populationNew} d'habitants parlent ${languageNew}.`);*/



// LECTURE: Taking Decisions: if / else Statements

/* 1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

/*if (populationNew >= averagePopulation) {
   console.log(`La population du Portugal est supérieure à la moyenne`);
} else {
   console.log(`La population du Portugal est inférieure à la moyenne`)
}*/



// LECTURE: Type Conversion and Coercion

/* 1. Predict the result of these 5 operations without executing them:
2. Execute the operations to check if you were right */

/*console.log('9' - '5'); // résultat : 4
console.log('19' - '13' + '17'); // résultat : 617
console.log('19' - '13' + 17); // résultat : 23
console.log('123' < 57); // résultat : false
console.log(5 + 6 + '4' + 9 - 4 - 2); // résultat : 1143*/



// LECTURE: Equality Operators: == vs. ===
/* 1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation */

/*let numNeighbours = 1;

if (numNeighbours === 1) {
   console.log('Only 1 border !');
} else if (numNeighbours > 1) {
   console.log('More than 1 border');
} else (numNeighbours == 0 || numNeighbours >= 2) 
   console.log('No borders');



// LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
   country that speaks english, has less than 50 million people and is not an
   island.
3. Write an if statement to help Sarah figure out if your country is right for her.
   You will need to write a condition that accounts for all of Sarah's criteria. Take
   your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
   not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
   change some variables in order to make the condition true (unless you live in
   Canada :D*/

if ()
