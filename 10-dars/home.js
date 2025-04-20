// leetcose
// function climbStairs(n) {
//     if (n === 1) {
//         return 1;
//     }
//     let first = 1;
//     let second = 2;
//     for (let i = 3; i <= n; i++) {
//         let current = first + second;
//         first = second;
//         second = current;
//     }
//     return second;
// }
// console.log(climbStairs(2)); 
// console.log(climbStairs(3));  
// console.log(climbStairs(4));  

// leetcode
// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     let prev1 = 1;  
//     let prev2 = 0;  
//     for (let i = 2; i <= n; i++) {
//         let current = prev1 + prev2; 
//         prev2 = prev1; 
//         prev1 = current;  
//     }
//     return prev1;
// }
// console.log(fibonacci(2)); 
// console.log(fibonacci(3));  
// console.log(fibonacci(4));  
// console.log(fibonacci(5));  
// console.log(fibonacci(6)); 


// task - 1
// function returnWord(str) {
// let words = str.split(' ');
// let res = words.map(word => {
//     if (word.length < 3) {
//         return word;
//     } else {
//         let first = word[0];
//         let last = word[word.length - 1];
//         let ortaHisob = word.length - 2;
//         return first + ortaHisob + last;
//     }
// });
//     return res.join(' '); 
// };
// const input = "Every developer likes to mix kubernetes and javascript";
// console.log(returnWord(input));

// task -2
// function getTopStudents(students) {
//     let maxOrtacha = 0;
//     let res = [];
//     for (let student of students) {
//         const ballari = student.ballari;
//         const sum = ballari.reduce((acc, score) => acc + score, 0);
//         const avg = sum / ballari.length;
//         if (avg > maxOrtacha) {
//             maxOrtacha = avg;
//             res = [{ name: student.name, average: avg }];
//         } else if (avg === maxOrtacha) {
//             res.push({ name: student.name, average: avg });
//         }
//     }

//     return res;
// }
// const students = new Set([
//     { name: "Alice", ballari: [90, 85, 92] },
//     { name: "Bob", ballari: [75, 80, 85] },
//     { name: "Charlie", ballari: [90, 95, 85] },
//     { name: "Jack", ballari: [100, 100, 100] }
// ]);

// console.log(getTopStudents(students));


// task - 3
// function compareDepartments(employees) {
//     if (employees.size === 0) {
//         return "Xodimlar ro'yxati bo'sh!";
//     }
//     let hrSalary = 0, hrCount = 0;
//     let itSalary = 0, itCount = 0;
//     for (let employee of employees) {
//         if (employee.department === "HR") {
//             hrSalary += employee.salary;
//             hrCount++;
//         } else if (employee.department === "IT") {
//             itSalary += employee.salary;
//             itCount++;
//         }
//     }
//     const avgHR = hrSalary / hrCount;
//     const avgIT = itSalary / itCount;

//     if (avgHR > avgIT) {
//         return [{ department: "HR", average: avgHR }];
//     } else {
//         return [{ department: "IT", average: avgIT }];
//     }
// }
// const employees = new Set([
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ]);

// console.log(compareDepartments(employees));

// task - 4
// function mostSpokenLanguages(countries, n) {
//     let arr = Array.from(countries);
//     arr.sort((a, b) => {
//         let aVal = Object.values(a)[0];
//         let bVal = Object.values(b)[0];
//         return bVal - aVal;
//     });
//     return arr.slice(0, n);
// }
// let countries = new Set([
//     { Russian: 9 },
//     { English: 91 },
//     { French: 45 },
//     { Spanish: 24 },
//     { Portuguese: 9 },
//     { Dutch: 8 },
//     { German: 7 },
//     { Arabic: 25 },
//     { Chinese: 5 },
//     { Swahili: 4 },
//     { Serbian: 4 }
// ]);

// console.log(mostSpokenLanguages(countries, 3));


// task - 5
// const createBookCollection = {
//     books: [],
//     create(book) {
//         const newBook = {
//             id: Date.now(),
//             title: book.title,
//             author: book.author,
//             read: book.read || false
//         };
//         this.books.push(newBook);
//         return newBook;
//     },
//     findOne(id) {
//         return this.books.find(book => book.id === id) || null;
//     },
//     findAll() {
//         return this.books;
//     },
//     filterByAuthor(author) {
//         return this.books.filter(book => book.author === author);
//     },
//     filterByReaded() {
//         return this.books.filter(book => book.read);
//     },
//     deleteOne(id) {
//         const index = this.books.findIndex(book => book.id === id);
//         if (index !== -1) {
//             this.books.splice(index, 1);
//             return true;
//         }
//         return false;
//     },
//     deleteMany() {
//         this.books = [];
//         return 'Barcha kitoblar ochirildi';
//     }
// };

// task - 6
// function afterNYears(people, n) {
//     const yearsLater = Math.abs(n); 
//     const updatedPeople = {};
//     for (let person in people) {
//         updatedPeople[person] = people[person] + yearsLater;
//     }
//     return updatedPeople;
// }
// console.log(afterNYears({
//     "Joel": 32,
//     "Fred": 44,
//     "Reginald": 65,
//     "Susan": 33,
//     "Julian": 13
// }, 1));

// console.log(afterNYears({
//     "Baby": 2,
//     "Child": 8,
//     "Teenager": 15,
//     "Adult": 25,
//     "Elderly": 71
// }, 19));

