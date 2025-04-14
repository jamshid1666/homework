// For va while mashqlari

//  task - 1
// let n = +prompt('son kiriting');
// for (let i =1; i < n; i++) {
//    if (i % 2 !== 0) {
//     console.log(i);
//    }
// }


// task - 2
// let son = parseInt(prompt("Son kiriting:"));
// let str = son.toString();
// let sum = 0;
// for (let i = 0; i < str.length; i++) {
//     sum += parseInt(str[i]);
// }
// alert("Raqamlar yig'indisi: " + sum);


// task - 3
// let matn = prompt("soz kiriting:");
// let teskari = "";
// for (let i = matn.length - 1; i >= 0; i--) {
//     teskari += matn[i];
// }
// alert(teskari);


// task - 4
// let n = parseInt(prompt("Son kiriting:"));
// for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
// }


// task - 5
// let n = parseInt(prompt("n ni kiriting:"));
// let k = parseInt(prompt("k ni kiriting:"));
// let sum = 0;
// let i = 0;
// while (i < k) {
//     sum += n;
//     i++;
// }
// alert(sum);


// task - 6
// let n = parseInt(prompt("n ni kiriting:"));
// for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// task - 7
// let son = prompt("Son kiriting:");
// let result = "";
// for (let i = 0; i < son.length; i++) {
//     if (i % 2 !== 0) {
//         result += "0";
//     } else {
//         result += son[i];
//     }
// }
// alert(result);


// task - 8
// let n = parseInt(prompt("n ni kiriting:"));
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row += (i * j) + " ";
//     }
//     console.log(row.trim());
// }


// shartli operatorlar
// task - 1
// let ball = parseInt(prompt("Ballni kiriting:"));

// if (ball >= 90 && ball <= 100) {
//     alert("A'lo");
// } else if (ball >= 70 && ball < 90) {
//     alert("Yaxshi");
// } else if (ball >= 60 && ball < 70) {
//     alert("Qoniqarli");
// } else if (ball >= 0 && ball < 60) {
//     alert("Qoniqarsiz");
// }


// task -  2
// let kun = parseInt(prompt("Hafta kunini kiriting (1-7):"));

// if (kun === 1) {
//     alert("Dushanba");
// } else if (kun === 2) {
//     alert("Seshanba");
// } else if (kun === 3) {
//     alert("Chorshanba");
// } else if (kun === 4) {
//     alert("Payshanba");
// } else if (kun === 5) {
//     alert("Juma");
// } else if (kun === 6) {
//     alert("Shanba");
// } else if (kun === 7) {
//     alert("Yakshanba");
// } else {
//     alert("Noto'g'ri raqam");
// }


// task - 3
// let yosh = parseInt(prompt("Yoshni kiriting:"));

// if (yosh >= 0 && yosh <= 12) {
//     alert("Bola");
// } else if (yosh >= 13 && yosh <= 19) {
//     alert("O'smir");
// } else if (yosh >= 20 && yosh <= 59) {
//     alert("Katta");
// } else if (yosh >= 60) {
//     alert("Qariya");
// }


// task -  4
// let a = parseInt(prompt("a ni kiriting:"));
// let b = parseInt(prompt("b ni kiriting:"));
// let c = parseInt(prompt("c ni kiriting:"));

// let max = (a > b && a > c) ? a : (b > c ? b : c);
// alert(max);


// task -  5
// let oy = parseInt(prompt("Oy raqamini kiriting:"));
// let kunlar;

// if (oy === 1 || oy === 3 || oy === 5 || oy === 7 || oy === 8 || oy === 10 || oy === 12) {
//     kunlar = 31;
// } else if (oy === 4 || oy === 6 || oy === 9 || oy === 11) {
//     kunlar = 30;
// } else if (oy === 2) {
//     kunlar = 28;
// } else {
//     kunlar = "Noto'g'ri oy";
// }

// alert(kunlar);


// task -  6
// let login = prompt("Loginni kiriting:");
// let parol = prompt("Parolni kiriting:");

// if (login === "admin" && parol === "12345") {
//     alert("Xush kelibsiz, Admin");
// } else if (login === "user" && parol === "password") {
//     alert("Xush kelibsiz, Foydalanuvchi");
// } else {
//     alert("Login yoki parol xato");
// }


// task -  7
// let oy = parseInt(prompt("Oy raqamini kiriting:"));
// let fasl;

// if (oy === 12 || oy === 1 || oy === 2) {
//     fasl = "Qish";
// } else if (oy === 3 || oy === 4 || oy === 5) {
//     fasl = "Bahor";
// } else if (oy === 6 || oy === 7 || oy === 8) {
//     fasl = "Yoz";
// } else if (oy === 9 || oy === 10 || oy === 11) {
//     fasl = "Kuz";
// } else {
//     fasl = "Noto'g'ri oy";
// }

// alert(fasl);


// task -  8
// let raqam = parseInt(prompt("Raqamni kiriting:"));
// let soz;

// if (raqam === 1) {
//     soz = "bir";
// } else if (raqam === 2) {
//     soz = "ikki";
// } else if (raqam === 3) {
//     soz = "uch";
// } else if (raqam === 4) {
//     soz = "to'rt";
// } else if (raqam === 5) {
//     soz = "besh";
// } else {
//     soz = "noto'g'ri raqam";
// }

// alert(soz);


// task -  9
// let baho = parseInt(prompt("Bahoni kiriting:"));
// let tavsif;

// if (baho === 5) {
//     tavsif = "A'lo";
// } else if (baho === 4) {
//     tavsif = "Yaxshi";
// } else if (baho === 3) {
//     tavsif = "Qoniqarli";
// } else if (baho === 2) {
//     tavsif = "Qoniqarsiz";
// } else if (baho === 1) {
//     tavsif = "Yomon";
// } else {
//     tavsif = "Noto'g'ri baho";
// }

// alert(tavsif);


// task -  10
// let fasl = prompt("Fasl nomini kiriting:").toLowerCase();
// let oylar;

// if (fasl === "qish") {
//     oylar = "Dekabr, Yanvar, Fevral";
// } else if (fasl === "bahor") {
//     oylar = "Mart, Aprel, May";
// } else if (fasl === "yoz") {
//     oylar = "Iyun, Iyul, Avgust";
// } else if (fasl === "kuz") {
//     oylar = "Sentabr, Oktabr, Noyabr";
// } else {
//     oylar = "Bunday fasl yo'q";
// }

// alert(oylar);


// task -  11
// let son = parseInt(prompt("Sonni kiriting:"));

// let natija = son === 0 ? "Nol" : (son > 0 ? (son % 2 === 0 ? "Musbat juft son" : "Musbat toq son") : (son % 2 === 0 ? "Manfiy juft son" : "Manfiy toq son"));

// alert(natija);


// task -  12
// let rang = prompt("Rang nomini kiriting:").toLowerCase();
// let rangKodni;

// if (rang === "qizil") {
//     rangKodni = "#FF0000";
// } else if (rang === "yashil") {
//     rangKodni = "#00FF00";
// } else if (rang === "ko'k") {
//     rangKodni = "#0000FF";
// } else {
//     rangKodni = "Bunday rang kodi yo'q";
// }

// alert(rangKodni);


// Funksiyalar
// task -  1
// function createCharacter(name, power) {
//     let level = Math.floor(Math.random() * 10) + 1;
//     let info = `${level}-darajali ${name}, kuchi: ${power}`;
//     return {
//         name: name,
//         power: power,
//         level: level,
//         info: info
//     };
// }


// task -  2
// function createPost(image, title, tags) {
//     let likes = Math.floor(Math.random() * 1001);
//     let views = Math.floor(Math.random() * 1001);
//     return {
//         image: image,
//         title: title,
//         tags: tags,
//         likes: likes,
//         views: views
//     };
// }

// task -  2
// function func (image,title,tags) {
//     this.image = image;
//     this.title = title;
//     this.tags = tags;
//     this.likes = Math.floor(Math.random()*1000) + 1;
//     this.views = Math.floor(Math.random()*1000) + 1;
//     this.info =`${this.image} - jpg ${this.name} - bugun zor kun ${this.tags} - `
// }
// let.post1 = new func('photo', 'bugun zor kun', ['fun', 'holiday']);

// console.log(post1);

// task - 3
// let sizeObj = {
//     small: 2500,
//     medium: 4000,
//     large: 6000,
// };

// let extraqObj = {
//     cheese: 1000,
//     tomato: 800,
//     free: 1300,
// }

// function orderPizza(size,extra) {
//     let extraPrice = 0;
//     for (let i = 0; i < extra.length; i++) {
//         extraPrice += extraqObj[extra[i]];
//     }
//     this.size = size;
//     this.extra = extra;
//     this.price = sizeObj[this.size] + extraPrice;
//     this.time = `${Math.floor(Math.random() * 45) + 15} daqiqa`;
// }

// let order = new orderPizza('medium',['cheese', 'tomato']);
// let order2 = new orderPizza('small', ['cheese', 'tomato', 'free']);
// console.log(order);
// console.log(order2);


// task - 4


// task - 8 
// function randCommit() {
//     let str = 'qwertyuiopasdfghjklzxcvbnm123456789';
//     let commit = '';
//     let saveCommit = [];
//     for (let i =0; i < 8; i++) {
//         commit += str[Math.floor(Math.random() * str.length)];
//     }
//     if (!saveCommit.includes(commit)) {
//         saveCommit.push(commit);
//         return commit;
//     } else {
//         return randCommit();
//     }
// }

// console.log(randCommit());