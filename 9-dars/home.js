// task - 1
// function ajratI(num) {
// let yarm = Math.floor(num / 2);
// alert(yarm);
// let yarm2 = num - yarm;
// alert(yarm2);
// return [yarm, yarm2];
// } 
// let res  = +prompt('son kirit');
// alert(ajratI(res));

// task - 2
// function sumOfCubes (arr) {
//     let sum = 0;
//     for (let i = 0;i < arr.length; i++) {
//         let b = arr[i]**3;
//         sum += b;
//     }
//     return sum;
// }
// let c = [1, 5, 9];
// alert(sumOfCubes(c));


// task - 3
// function minMax(arr) {
//     if (arr.length === 0) {
//         return [undefined,undefined];
//     }
//     let min = arr[0];
//     let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min){
//         min = arr[i];
//     }
//     if (arr[i] > max){
//         max = arr[i];
//     }
// }
// return [min, max];
// }
// let c = [1, 2, 3, 4, 5];
// let b = [2334454, 5];
// alert(minMax(b));

// task- 4
// function findFirstOddNumber(arr) {
//     if(arr.length === 0) {
//         return undefined;
//     }
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 1) {
//         return arr[i];
//     }
// }
// return undefined + ' toq son yoq ekan';
// }
// let c = [124, 42, 94, 22, 12];
// alert(findFirstOddNumber(c));


// task -5
// function func (arr) {
//     if(arr.length !== 2){
//         return 'faqat 2 ta element kiriting';
//     }
//     let num1 = arr[0];
//     let num2 = arr[1];
//     let kopaytma = 0;
// for (let i = 0; i < Math.abs(num1); i++) {
//     kopaytma += num2;
// }
// if (num1 < 0){
//     kopaytma = -kopaytma;
// }
// return kopaytma;
// }
// let b = [3, 4];
// console.log(func(b));

// task - 6
// function returnVowel (arr) {
// let a = 'euioa';
// const res = [];
// for (let i = 0; i < arr.length; i++){
//     let unli = '';
//     const soz = arr[i].toLowerCase();
// for (let j =0; j < soz.length; j++ ) {
//     if (a.includes(soz[j])) {
//         unli += soz[j];
//     }
// }    
// res.push(unli);
// }
// return res;
// }
// let b = ["Assalomu alaykum", "salom", "Najot ta'lim"];
// alert(returnVowel(b));

// task - 7
// function formatPhoneNumber(arr) {
//     if (arr.length !== 10) {
//         return '10 ta raqam kiriting';
//     }
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number' || arr[i] < 0 || arr[i] > 9) {
//         return '0 va 9 oraligida raqam kiriting';
//     }
//   }
//   const part1 = arr.slice(0,3).join('');
//   const part2 = arr.slice(3,6).join('');
//   const part3 = arr.slice(6,8).join('');
//   const part4 = arr.slice(8,10).join('');  shartga biroz ozgartirish qildim ustoz!
  
// return `(${part1}) ${part2}-${part3}-${part4}`;
// } 
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// alert(formatPhoneNumber(b));

// task - 8
// function qoshBorish (str) {
// let res = [];
// for (let i = 0; i < str.length; i++) {
//     let qism = str.slice(0,i + 1);
//     res.push(qism);
// }
// return res;
// }
// let b = "eagerly";
// console.log("bosqichma-bosqich paydo bolayotgan bolaklar:");
// console.log(qoshBorish(b));

// task - 9
// function chatroomStatus(arr) {
// n = arr.length++;
// if (n == 0) {
//     return 'no one online';
// }
// if (n == 1) {
//     return arr[0] + ' online';
// } else if (n == 2) {
//     return arr[0] + ' and ' + arr[1] + ' online';
// }
// if (n > 2) {
//     return arr[0] + ', ' + arr[1] + ' and ' + (n-2) + ' more online';
// }
// }
// let b = ["ali", "vali",'sali', 'gali', 'pali'];
// console.log(chatroomStatus(b));

// task - 10
// function returnTrueCount(arr,element) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === element) {
//             count++;
//         }
//     }
//     return count;
// }
// const b = [true, false, false, true, false];
// const truelarSoni = returnTrueCount(b,true);
// console.log(truelarSoni);

// task - 10/2-variant
// function countTrue(arr) {
//     return arr.filter(item => item === true).length;
// }

// bonus 1
// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// function returnTub(arr) {
//     if (arr.length === 0) {
//         return 'malumot kiriting';
//     }
//     let b = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             b.push(arr[i]); 
//         }
//     }
//     return b;
// }
// console.log(returnTub([1, 2, 3, 4, 5, 6, 7]));