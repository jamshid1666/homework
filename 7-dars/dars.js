
// function b() {
//     return () => {
//         return () => {
//             return () =>{
//                 console.log([1,2]);
//             };
//         };
//     };
// };
// let res = b()()()();
// console.log(res);

// a(2)(3)(4)(5)(5)() oxirida qavs ichiga parametr berilmasa  yigindi qaytarsin

// function add(a,b) {
//     console.log(this);
//     return a+b + this.x + this.y;
// }

// // add(1,2);
// const obj = {
//     x:12,
//     y:55,
// };

// console.log(add.call(obj, 1, 2));

// const person = {
//     firstName: 'Ali',
//     lastName: 'Valiyev',
// };

// const person2 = {
//     firstName: 'Jamshid',
//     lastName: 'Saribayev',
// };

// function greet (greeting) {
//     console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
// }

// greet.call(person2, 'Privet');

// function greet(a,b) {
//     return `${this.firstName}, ${a}. ${b}`;
// }

// let res = greet.apply(person2, ['Good morning', 'How are you']);
// console.log(res);

// const student1 = {
//     names: 'Jam',
//     grade: '5',
//     introduction: function () {
//         console.log(this.names + ' studies in grade ' + this.grade + '.');
//     },
// };

// const student2 = {
//     names: 'Javoh',
//     grade: '6',
// };

// let res = student1.introduction.bind(student2);
// let res2 = student1.introduction();
// res();
