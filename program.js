//function that generates random number based off array length
const generateRandomNum = arr => Math.floor(Math.random() * arr.length);

//object that stores all message components
const identity = {
    _names: ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava","William","Sophia","Elijah","Isabella", "James", "Charlotte", "Benjamin",
    "Amelia",
    "Lucas",
    "Mia",
    "Mason",
    "Harper",
    "Ethan",
    "Evelyn"],
    _age: [25, 23, 15, 20, 24, 10, 32, 45, 100, 92, 52, 22, 76],
    _gender: ['male', 'female', 'no-gender'],
    get name() {
        return this._names;
    },
    get age() {
        return this._age;
    },
    get gender() {
        return this._gender;
    },
    set name(input) {
        typeof input === 'string' ? this._names.push(input) : console.log('Name must be in string format!');
    },
    set age(input) {
        typeof input === 'number' ? this._age.push(input) : console.log('Age must be a number!');
    },
    set gender(input) {
        typeof input === 'string' ? this._gender.push(input) : console.log('Gender must be in string format!');
    },
    generateMessage() {
        return `Your new identity has been created! \n\nNew name: ${identity.name[generateRandomNum(identity._names)]} \nNew age is: ${identity.age[generateRandomNum(identity._age)]} \nNew gender is: ${identity.gender[generateRandomNum(identity._gender)]}`;
    },
}

//calls the generate message function and logs to console
console.log(identity.generateMessage());