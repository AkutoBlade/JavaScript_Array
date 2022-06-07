// let age = 18;
// let salary = 5000;
// let bonus = 500;

// if ((age >= 18) && (salary >= 5000)) {
//     salary+=bonus
//     console.log('Your salary: R'.concat(salary));
// } else{
//     console.log('Please try again later');
// };


//Outer if statement
// if (age >= 18){
//Inner if statement
//     if(salary >= 5000) {
//         salary+=bonus;
//         console.log('Your salary: R'.concat(salary));
//     } else {
//         console.log('Your salary is less that R5000');
//     }
// } else {
//     console.log('Your are not qualified');
// }

//collection
// let items = ['Banana','Mango','Orange','Laptop','Mouse','Keyboard'];

//linking

// let ul = document.getElementById('items');

//load items to an ul
// items.forEach((item =>{
//     ul.innerHTML+=`
//     <li>${item}</li>

//     `
// }));

let bestFriends = ['Muddathir','Yaseen','Clayton','Daniel','Taucia','Emile','Reagon','Charles','Xena','Joshua'];

let friends = bestFriends.length/2;
let lastFriend= bestFriends.length-1;

console.log(bestFriends[friends]+' '+bestFriends[lastFriend]); 