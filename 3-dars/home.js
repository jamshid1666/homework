// Task - 1
// let a = parseInt(prompt('1-sonni kirit'));
// let b = parseInt(prompt('2-sonni kirit'));
// let sum = a+b;
// alert(sum)


// Task - 2
// let a = prompt('ism kiriting');
// let b = prompt('familiya kiriting');
// let umumiy = a + ' ' + b;
// alert(umumiy)


// Task - 3
// const age = parseInt(prompt('yosh kiriting'));
// if (age <= 18) {
//     alert('siz voyaga yetmagansiz')
// } else if (age > 18) {
//     alert ('siz voyaga yetgansiz')
// }


// Task - 4
// const number = parseInt(prompt('son kiriting'));
// if (number % 2 === 0) {
//     alert('juft son')
// } else {
//     alert('toq son')
// }


// Task - 5
// const score = parseInt(prompt('balni kiriting'));
// if (score < 60) {
//     alert('F')
// } else if (score >= 60 && score <= 69) {
//     alert('D')
// } else if (score >= 70 && score <= 79) {
//     alert('C')
// }  else if (score >= 80 && score <= 89) {
//     alert('B')
// }  else if (score >= 90 && score <= 100) {
//     alert('A')
// }


// Task - 6
// const a = parseInt(prompt('tomon uzunligini kiriting'));
// alert('perimetr: ' + a*a +' sm,' + ' yuz: ' + a*a + ' sm2')


// Task - 7
// const b = parseInt(prompt('kub tomonini kiriting'));
// alert('hajm: ' + b**b + ' sm3')


// Task - 8
// const a = parseFloat(prompt('darajani kiriting'));
// const javob = (a * 9/5) + 32;
// alert('kutilgan natija: ' + javob + 'F');


// Task - 9
// const foiz = parseInt(prompt('namlik foizini kiriting'));
// if (foiz <= 30) {
//     alert('havo juda quruq')
// } else if (foiz > 30 && foiz <= 60) {
//     alert('habo qulay')
// } else {
//     alert('havo nam')
// }


// Task - 10
// const tezlik = prompt('tezlikni kiriiting');
// if (tezlik <= 50) {
//     alert('internet sekin')
// } else if (tezlik > 50  && tezlik < 100 ) {
//     alert('internet ortacha')
// } else {
//     alert('internet juda tez')
// }


// Task - 11
// const summaStr = prompt('dollarni miqdorini kiriting');
// const summa = parseInt(summaStr);
// const kurs = 10650;
// if (!isNaN(summa)) {
//     const som = summa * kurs;
//     alert(summa + ' dollar = ' + som + " so'm");
// } else {
//     alert('notogri qiymat kiritdingiz');
// }


// Task - 12
const yoshStr = prompt('yoshingizni kiriting');
const yosh = parseInt(yoshStr);
const avtoTuri = prompt('avto turini kiriting (yengil yoki yuk):') 
    if (yosh >= 18 && avtoTuri === 'yengil') {
        alert('siz yengil mashina boshqarishingiz mumkin')
} else if (yosh >= 18 && avtoTuri === 'yuk') {
    alert('siz yuk mashina boshqarishingiz mumkin')
}
