
/* A-1 (5) */
const profileData = {
    name: 'Kakai',
    surname: 'Wapenyi',
    age: 27,
    city: 'Berlin'
};

/* A-2 (5) */
const convertObjectToArray = function(object) {
    let convertedObj = Object.entries(object);
    return convertedObj;
}

const example = {
    "1": 10, 
    "2": 20, 
    "3": 30
}

console.log(convertObjectToArray(example));


/* B-1 (10) */
const convertArrayData = function(array) {
    const splicedItem = array.splice(1, 1);
    array.unshift(splicedItem[0]);
    array[2] = "milk";
    return array
};

let beverages = ["coffee", "tea", "juice"];

console.log(convertArrayData(beverages));

/* B-2 (15) */
const convertArraysToObject = function(array1, array2) {
    let object = array1.reduce((prev, curr, index) => {
        prev[curr] = array2[index];
        return prev;
    }, {})
    return object;
};

let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];

console.log(convertArraysToObject(cities, areas));

/* B-3 (10) */
const createGrid = function(size, char) {
    let mainArray = [];
    let totalChars = size * size;
    for (let i = 0; i < totalChars; i++) {
        mainArray.push(char)  
    }
    let result = mainArray.reduce((resultArray, item, index) => {
        const lumpIndex = Math.floor(index/size);
        if (!resultArray[lumpIndex]) {
            resultArray[lumpIndex] = [];
        }
        resultArray[lumpIndex].push(item);
        return resultArray;
    }, [])
    return result;
};

console.log(createGrid(3, "*"));

/* B-4 (10) */
const wordConverter = function(array, str) {
    let plusSuffix = array.map((item) => item + str);
    return plusSuffix;
};

let adjectives = ["smart", "kind", "sweet", "small", "clear"];

console.log(wordConverter(adjectives, "er"));

/* B-5 (10) */
const calculateHours = function(array) {
    let totalHours = array.reduce((total, currentValue) => total + (currentValue.end - currentValue.start), 0)
    return totalHours;
};

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];

console.log(calculateHours(hourTracking));

/* C (10) */
const Course = class {
    constructor(teacher, type, number) {
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }
    spaceNeeded() {
        const space = this.number * 2;
        return `The classroom should be ${space} m².`
    }
    details() {
        const {teacher, type, number} = this;
        return `This is a ${type} course taught by ${teacher}. There are ${number} students taking the course.`
    }
}

const course = new Course("John", "web development", 22);

console.log(course.spaceNeeded());

console.log(course.details());

/* D-1 (10) */
const capitalizeFirstLetter = function(arg) {
    if (typeof arg !== 'string') {
        arg = arg.toString();
    } // if statement isn't necessary here. just do const string = arg.toString().
    argToArray = arg.split(" ");
    capitalizedArray = argToArray.map((item) => item[0].toUpperCase() + item.slice(1));
    capitalizedString = capitalizedArray.join(" ");
    return capitalizedString;
};

console.log(capitalizeFirstLetter("hey there"));

console.log(capitalizeFirstLetter(true));

/* D-2 (15) */
const validPin = function(pin) {
    let sum = pin.split("").map((item) => parseInt(item)).reduce((prev, curr) => prev + curr, 0);
    if (isNaN(Number(pin))) { // Number.isInteger(+"123")
        return false;
    } else if (pin.length !== 4) {
        return false;
    } else if (new Set(pin).size < 2) {
        return false;
    } else if (pin[pin.length -1] % 2 === 1) {
        return false;
    } else if (sum < 5) {
        return false;
    } else {
        return true;
    }
};

console.log(validPin("1234"));
//true
console.log(validPin("1235"));// last number should be even
//false 
console.log(validPin("wwww"));// should only consist of numbers
//false 
console.log(validPin("12345"));// should be 4 digits, not 5
//false 
console.log(validPin("2222"));// not at least 2 different digits
//false 
console.log(validPin("1000"));// sum of digits is less 5
//false 
console.log(validPin("2224"));
//true 
