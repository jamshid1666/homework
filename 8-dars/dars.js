// function returnVowel (arr) {
//     let c = [];
//     const vowels = 'euioa';
//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i].toLowerCase();
//         let unli = "";
//     for (let j =0; j < str.length; j++) {
//         if (vowels.includes(str[j])) {
//             unli += str[j];
//         }
//     }  
//     c.push(unli);  
//     }
//     return c;
// }
// let w = ['Assalom alaykum', 'salom', 'Najot talim'];
// let res = returnVowel(w);
// console.log(res);


// task -1
// let number = 123456789;
// let res = number.toString().split('').join('*');
// alert(res)

// task -2
// function move(arr,n) {
//     n = n % arr.length;
//     let end = arr.splice(arr.length - n);
//     return end.concat(arr);
// }
// console.log(move([4,5,6,7,8],1));

// task-3
// function returnUnli (arr) {
//     let c = [];
//     const vowels = 'euioa';
//     for (let i = 0; i < arr.length; i++){
//         let str = arr[i].toLowerCase();
//         let unli = "";
//         if (vowels.includes(str)) {
//             unli += str;
//         }  
//     c.push(unli);
//     }
//     return c;
// }
// let d = prompt('matn kiriting');
// alert(returnUnli(d))

// task - 5
let arr = [3,2,4,5,6,4,4,4,4,3,3];
let obj = {};
arr.forEach((val) =>{
    obj[val] = obj[val] ? obj[val] +1 : 1;
});
let maxCount = 0;
let k;
for (key in obj) {
    if (maxCount < obj[key]) {
        maxCount = obj[key];
        k = key;
    }
}
console.log(`arrayning eng kop takrorlangan elementi: ${k}, va u ${obj[k]} marta uchragan`);