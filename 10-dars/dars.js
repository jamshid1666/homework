// task -1
// let d = [1,2,3,4,5,6,7,8];
// let b = d.some((val) => val > 10);
// console.log(b);

// task -2
// let d = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = d.some((val) => val > 0);
// console.log(b);

// task - 3
// function flat (arr,res = []) {
//     arr.forEach((val) => {
//         if (!Array.isArray(val)) {
//             res.push(val);
//         } else {
//             return flat(val, res);
//         }
//     });
//     return res;
// }
// console.log(flat([1, [2, [4, [5]]]]));

// task -4
// const products = [
// {name: 'Non', category: 'oziq-ovqat'},
// {name:'Telefon', category: 'texnika'},
// { name: 'sut', category: 'oziq-ovqat' },
// { name: 'Televizor', category: 'texnika' },
// ];
// let obj = {};
// function groupBy(products){
// products.forEach(val => {
//     obj[val.category] = obj[val.category]
//     ? [...obj[val.category],{name:val.name}]   
//     : []; 
//     });
//     console.log(obj);
// }
// groupBy(products);

// task - 5
// const employes = [
//     {age:}
// ]
// _________________________________________________________________

// const map = new Map();
// // setting values
// map.set('name', 'Alice');
// map.set('age', 25);
// map.set('isStudent', true);
// // getting values
// console.log(map.get('name'));
// console.log(map.get('age'));
// // checking existance
// console.log(map.has('isStudent'));
// console.log(map.has('grade'));
// // deleting a key
// map.delete('age');
// console.log(map.has('age'));
// // size of the map
// console.log(map.size); 
// // iterating over Map
// map.forEach((value,key) =>{
//     console.log(`${key}: ${value}`);
// }
// );
// // output:
// // name: Alice
// // isStudent:true

// ________________________________________________________________

// const capitals = new Map ([
//     ['USA', 'Washington D,C'],
//     ['Canada', 'Ottawa'],
//     ['UK', 'London'],
// ]);

// for (const [country,capital] of capitals.entries()) {
//     console.log(`${country}: ${capital}`);
// }

// for (const [country, capital] of capitals) {
//     console.log(`${country}: ${capital}`);
// }

// capitals.forEach((capital,country) => {
//     console.log(`${country}: ${capital}`);
// });
// _______________________________________________________________


// const set = new Set();

// set.add('apple');
// set.add('banana');
// set.add('apple') b0shqa bu nomdagi qosholmaymiz

// console.log(set.has('banana'));  treu
// console.log(set.has('date')); false

// set.delete('banana');
// console.log(set.has('banana')); false

// console.log(set.size); 2

// set.forEach((value) => {

// })
// __________________________________________________________


// const fruits = ['apple', 'banana', 'apple', 'banana','orange'];
// const fruitsCount = new Map();

// fruits.forEach((fruits) => {
//     fruitsCount.set(fruits, (fruitsCount.get(fruits) || 0 ) + 1);
// });

// console.log(fruitsCount);
