// // asosiy  malumotlar strukturasi
// let pizzaOrders = [
//     { id: 1, type: 'pishloqli', size: 'large' },
//     { id: 2, type: 'tovuqli', size: 'medium' },
//     { id: 3, type: 'qazili', size: 'small' },
//     { id: 4, type: 'pishloqsiz', size: 'large' }
// ];

// // narx hisooblash funksiyasi
// function calculatePrice(order) {
//     let total = 10000;

//     // type iga qarab qoshimcha narxlar
//     if (order.type === 'pishloqli') total += 5000;
//     if (order.type === 'pishloqsiz') total += 0;
//     if (order.type === 'tovuqli') total += 7000;
//     if (order.type === 'qazili') total += 10000;

//     // size iga qarab qoshimcha narxlar
//     if (order.size === 'small') total += 1000;
//     if (order.size === 'medium') total += 2000;
//     if (order.size === 'large') total += 3000;

//     // qoshimcha xususiyatlar
//     if (order.extraSauce) total += 2000;
//     if (order.doubleCheese) total += 3000;

//     return total;
// }

// // pitsa tayyor bo‘lganda xabar beruvchi callback funksiyasi
// function pizzaReadyCallback(order, totalPrice) {
//     console.log(`Pitsa #${order.id} (${order.type}, ${order.size}) tayyor! Narxi: ${totalPrice} so'm`);
// }

// // pitsani  buyurtma qilish funksiyasi
// function orderPizza(order, callback) {
//     console.log(`Pitsa #${order.id} (${order.type}, ${order.size}) buyurtma qilindi. Pishirish boshlandi...`);

//     let bakeTime = getBakeTime(order.type);

//     setTimeout(() => {
//         let price = calculatePrice(order);
//         callback(order, price);
//     }, bakeTime);
// }

// // tayyorlashga ketgan  vaqt funksiyasi
// function getBakeTime(type) {
//     switch (type) {
//         case 'pishloqli': return 2000; // 2 soniya
//         case 'tovuqli': return 2500; // 2.5 soniya
//         case 'qazili': return 3000; // 3 soniya
//         default: return 2000; // Default vaqti
//     }
// }

// // pitsa buyurtmalarini forEach bilan qayta ishlash
// pizzaOrders.forEach(function (order) {
//     orderPizza(order, pizzaReadyCallback);
// });



// // Nasiya savdo loyihasi
// // texnik qurilma buyurtmalari massivi
// let orders = [
//     { id: 1, productName: "MacBook Pro 16-inch", basePrice: 30000000, payInMonths: 6, monthlyPayment: 0 },
//     { id: 2, productName: "iPhone 13", basePrice: 15000000, payInMonths: 12, monthlyPayment: 0 },
//     { id: 3, productName: "Samsung Galaxy S21", basePrice: 20000000, payInMonths: 1, monthlyPayment: 0 },
//     { id: 4, productName: "Dell XPS 13", basePrice: 25000000, payInMonths: 6, monthlyPayment: 0 }
// ];

// // narxlarini hisoblash funksiyasi
// function calculateFinalPrice(basePrice, productName) {
//     let finalPrice = basePrice;

//     // apple brendga +5% ustama qo‘shamiz
//     if (productName.toLowerCase().includes("macbook") || productName.toLowerCase().includes("iphone")) {
//         finalPrice += finalPrice * 0.05; // Apple uchun 5% ustama
//     }

//     // Eski model bolsa chegirma qoshish mumkin
//     if (productName.toLowerCase().includes("xps")) {
//         finalPrice -= finalPrice * 0.10; // Dell XPS uchun 10% chegirma
//     }

//     return finalPrice;
// }

// // Bolib tolash hisoblash funksiyasi
// function calculateInstallments(finalPrice, payInMonths) {
//     let monthlyPayment = 0;

//     // Agar payInMonths 1 dan katta bo‘lsa
//     if (payInMonths > 1) {
//         // Bolib tolash va har oy tolovni hisoblash
//         monthlyPayment = Math.round(finalPrice / payInMonths);
//     } else {
//         // Agar biryola to‘lash bo‘lsa
//         monthlyPayment = finalPrice;
//     }

//     return monthlyPayment;
// }

// // qurilma tayyor bo‘lganda xabar beruvchi callback funksiya
// function deviceReadyCallback(order) {
//     if (order.payInMonths > 1) {
//         console.log(`${order.productName} (#${order.id}) tayyor bo'ldi!`);
//         console.log(`Har oy to'lash: ${order.monthlyPayment} so'm, jami: ${order.payInMonths} oy`);
//     } else {
//         console.log(`${order.productName} (#${order.id}) tayyor bo'ldi!`);
//         console.log(`Jami to'lov: ${order.finalPrice} so'm, biryo'la to'lanadi.`);
//     }
// }

// // buyurtma qilish funksiyasi
// function orderDevice(order, callback) {
//     console.log(`${order.productName} (#${order.id}) buyurtma qilindi. Ombordan yetkazib berilmoqda...`);

//     // 2 soniya kutish simulyatsiyasi
//     setTimeout(() => {
//         // FinalPrice va monthlyPayment hisoblash
//         order.finalPrice = calculateFinalPrice(order.basePrice, order.productName);
//         order.monthlyPayment = calculateInstallments(order.finalPrice, order.payInMonths);

//         // Callback chaqirish
//         callback(order);
//     }, 2000);
// }

// // buyurtmalarni qayta ishlash
// orders.forEach(order => orderDevice(order, deviceReadyCallback));

