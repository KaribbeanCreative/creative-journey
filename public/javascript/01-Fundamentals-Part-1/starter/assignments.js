// ASSIGNMENTS

// LECTURE: Values and Variables ✔️

const country = 'Guadeloupe';
const continent = 'Caraibes';
let population = 375845;
console.log(country, continent, population);



// LECTURE: Data Types ✔️
// LECTURE: let, const and var ✔️

const isIsland = true;
const language = 'creole';
console.log(typeof(isIsland), typeof(population), typeof(country), typeof(language));



// LECTURE: Basic Operators

let splitHalf = population / 2;
console.log(`Each part of the island will contains ${splitHalf}`);

if (population = 375845)  {
    population++
    console.log(population)
}

let populationFinland = 6;
if (populationFinland > population) {
    console.log('Finland population is greater than Guadeloupe population')
} else {
    console.log('Guadeloupe population is greater than Finland population');
}

let averagePop = 33000000;
if (averagePop > population) {
    console.log('Guadeloupe have less people than the average country');
}



// LECTURE: Strings and Template Literals ✔️

const description = `${country} is in ${continent}, and it's ${population} peoples speak ${language}`;
console.log(description);



// LECTURE: Taking Decisions: if / else Statements ✔️

if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} millions below average`)
}



// LECTURE: Type Conversion and Coercion ✔️

'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; //1143



// LECTURE: Equality Operators: == vs. === ✔️

const numNeighbours = prompt('How many neighbour countries does your country have ?');

if (numNeighbours === 1) {
    console.log(`Only 1 border !`);
} else if (Number(numNeighbours) > 1) {
    console.log(`More than 1 border !`)
} else {
    console.log('No borders');
}



// LECTURE: Logical Operators ✔️

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}😊`);
} else {
    console.log(`${country} does not meet your criteria 😢`);
}



// LECTURE: The switch Statement ✔️

switch (language) {
	case 'chinese':
    case 'mandarin': 
	    console.log('🇨🇳 : Most number of native speakers !');
    break;
    
    case 'spanish':
	    console.log('🇪🇸 : 2nd place in number of native speakers');
    break;
    
    case 'english':
	    console.log('3rd place');
    break;
    
    case 'hindi':
        console.log('Number 4');
    break;

    case 'arabic':
	    console.log('5th most spoken language');
    break;

    case 'creole':
	    console.log('🇬🇵 : Woaw you\'re from the Island');
    break;

    default :
	    console.log('Great language too 😀');
}



// LECTURE: The Conditional (Ternary) Operator ✔️

population >= 33000000 ? console.log(`${country} population is above average`) : console.log(`${country}'s population is below average`);
