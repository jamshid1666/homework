// Task 1 
// function sortPrice(drinks) {
//     return drinks.sort(function (a, b) {
//         return a.price - b.price;
//     });
// }

// let drinks = [
//     { name: 'cola', price: 50 },
//     { name: 'fanta', price: 25 },
//     { name: 'water', price: 16 },
//     { name: 'lime', price: 38 },
// ];

// let sortDrinksPrice = sortPrice(drinks);
// console.log(sortDrinksPrice);


// let drinks = [
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 10 },
//     {name: 'sok', price: 42},
//     {name: 'cola', price: 29}
// ];

// drinks.sort(function(a,b) {
//     return a.price - b.price;
// });

// console.log(drinks);

// Task - 2
// function objectToArray (obj) {
// return Object.entries(obj);
// }
// let objects = {
//     D: 1,
//     B: 2,
//     C: 3
// };
// let res = objectToArray(objects);
// console.log(res);
            

// Task - 3
// function nameToArray (users) {
//   let resArray = [];
//     for (let i = 0; i < users.length; i++) {
//         resArray.push(users[i].names);
//     }
//   return resArray;
// }
// let users = [
//     { names: "John", email: "john@example.com" },
//     { names: "Jason", email: "jason@example.com" },
//     { names: "Jeremy", email: "jeremy@example.com" },
//     { names: "Jacob", email: "jacob@example.com" }
// ];
// let res = nameToArray(users);
// console.log(res)


// Task - 4
// function afterNYears(people,n){
// for (let person in people) {
//     if (people.hasOwnProperty(person)) {
//         people[person] += n;
//     }
// }
// return people;
// } 
// let person = {
//     "Joel": 32,
//     "Fred": 44,
//     "Reginald": 65,
//     "Susan": 33,
//     "Julian": 13
// };
// let res = afterNYears(person,5);
// console.log(res);

// Task  - 5


// Task - 6
// function doubleChar(str) {
//     let res = "";
//     for (let i = 0; i < str.length; i++) {
//         res += str[i] + str[i];
//     }
//     return res;
// }
// let result = doubleChar('String');
// console.log(result);


// Task - 7
// function upperCase(str) {
// let b = str.split(' ');
// for (let i = 0; i < b.length; i++) {
// if (b[i][0] !== b[i][0].toUpperCase()) {
//     return false;
// }
// }
// return true;
// }
// let res = upperCase("A Mind Boggling Achievement");
// console.log(res);

// Task - 8 Leetcode
// function firstUniqueCharacter(str) {
//     let count = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (count[str[i]] === 1) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// console.log(firstUniqueCharacter("leetcode"));
// console.log(firstUniqueCharacter("loveleetcode")); 

// Task - 9 Leetcode
