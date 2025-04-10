/*var firstName = 'Usmon'

let a = 12 
a  = 42

const PI = 3.14

const birthday = '10 may'

console.log("Hello JavaScript")
console.log(a)
console.log(firstName)
console.log(a)
console.log(PI)
console.log(birthday)


let person = {
    name: 'Ali',
    age: 12,
    gender: 'Male',
    isStudent: true,
    isMerried:false,
    hobby: ['cs','pubg','fifa']

}
console.log(person);

let sum = a+b
let result1=a+b
let result2=a-b
let result3=a*b
let result4=a/b
let result5=a%b

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
*/
let person = {
    name: 'Jamshid',
    age: 30,
    gender: 'Male',
    hobbies: ['play footboll'],
    skills: ['read book'],
};

alert(person.name);

const firstName = prompt('Ismingizni kiriting');
const lastName = prompt('Familiya kiriting');
const age = parseInt(prompt('Yosh kiriting'));
console.log(firstName);
console.log(lastName);
console.log(typeof age);
console.log(age);

const grade = parseInt(prompt('Bahoni kirit'));

if (grade <= 0) {
    console.log('notogri son kiritdiz');
} else if (grade >= 1 && grade <= 55) {
    console.log('very poor');
} else if (grade >= 55 && grade <= 65) {
    console.log('poor');
}   else if (grade >= 65 && grade <= 79) {
    console.log('fair');
}    else if (grade >= 79 && grade <= 89) {
    console.log('good');
}      else if (grade >= 89 && grade <= 100) {
    console.log('very good');
}    else {
    
}