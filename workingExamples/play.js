let name = 'Max';
let age = 25;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
    ' and the user has hobbies: '
     + userHasHobby
     );
};

const add = (a,b) => a + b;

const addOne = (a) => a + 1;

console.log(addOne(2));
console.log(add(1,4));
console.log(summarizeUser(name, age, hasHobbies));

// objects
const person = {
    name: 'Dallin',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
const printName = ({name}) => console.log(name);

printName(person);

// arrays
const hobbies = ['Cooking', 'Sports', 'Gaming'];

for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby =>'Hobby: ' + hobby));
console.log(hobbies);
console.log(hobbies.includes('Cooking'));

// spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

// rest operator
const toArray = (...args) => args

console.log(toArray(1,2,3,4,5,6));