function sumOfDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++ ) {
        let b = +str[i];
       if (isNan(b) == !true) {
        sum += b;
       }
    }
    console.log(sum);
}
console.log(sumOfDigits('abc123def45'));

// function revers (str) {
//     let c = "";
//     for ( i = str.length - 1; i >= 0; i--) {
//     c += str[i];
// }
// return c
// }
// let b = prompt('matn kiriting');
// console.log(revers(b))