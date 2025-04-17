// Task 1
// function tekshirParol (parol){
// if (parol.length < 8) {
//  return('kuchsiz parol: 8 belgidan kam');   
// }
// if (!/[A-Z]/.test(parol)) {
//    return('kuchsiz parol: Katta harf yoq');
// }
// if (!/[a-z]/.test(parol)) {
//    return('kuchsiz parol: kichik harf yoq');   
// }
// if (!/[0-9]/.test(parol)) {
//    return('kuchsiz parol: raqam yoq');  
// }
// return('kuchli parol');
// }
// let parol = prompt('parol kiriting');
// alert(tekshirParol(parol)); 

// Task - 2
// function xaridCHek (narx,miqdor) {
//     if (isNaN(narx) || isNaN(miqdor)) {
//         return 'notogri malumot kiritildi'
//     }
//     let umumSumma = narx * miqdor;
//     if (umumSumma < 100_000) {
//         return Math.floor(umumSumma);
//     } else {
//         return Math.floor(umumSumma * 0.9)  + ' chegirmadan keyingi summa';
//     }
// }
// let narx = +prompt('narx kirit');
// let miqdor = +prompt('miqdorini kirit');
// alert(xaridCHek(narx,miqdor));

// Task - 3
// function returnStar(str) {
// let c = '1234567890';
// let res = '';
// for (let i = 0; i < str.length; i++) {
//     if(c.includes(str[i])){
//         res += '*';
//     } else {
//         res += str[i];
//     }
// }
// return res;
// }
// let matn = prompt('matn kirit');
// alert(returnStar(matn));

// Task - 4
// function qisqaIsm(str) {
//    let parts = str.trim().split(' ');
//    if (parts.length !== 2) {
//     return "faqat ism va familiya kiriting";
//    }
//    let qisqa = parts[0][0].toUpperCase() + '.' + parts[1];
//    return qisqa;
// }
// let fullName = prompt('ism va familiya kirit');
// alert(qisqaIsm(fullName));

// Task - 5
// function AjratVaqt (num) {
// if (isNaN(num) || num < 0) {
//     return 'xatolik';
// }
// let soat = Math.floor(num / 60);
// let daqiqa = num % 60;
// return `${soat} soat ${daqiqa} daqiqa`;
// }
// let miqdor = +prompt('daqiqa miqdorini kirit');
// alert(AjratVaqt(miqdor));

// Task - 6;
// function countCase(text,harf) {
// if (harf.length !== 1) {
//     return 0;
// }
// let count = 0;
// text = text.toLowerCase();
// harf = harf.toLowerCase();
// for (let i = 0; i < text.length; i++) {
//     if (text[i] === harf) {
//         count++;
//     }
// }
// return count;
// }
// let matn = prompt('matn kiriting');
// let harf = prompt('harf kiriting');
// alert(countCase(matn,harf));

// Task - 7
// function konversion(num) {
// if (isNaN(num) || num < 0) {
//     return 'xatolik';
// }
// let kurs = 12500;
// let summa = num / kurs;
// return summa.toFixed(2) + 'USD';
// }
// let son = +prompt('pul miqdorini kiriting');
// alert(konversion(son));


