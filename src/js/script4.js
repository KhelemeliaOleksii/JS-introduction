//Block 4
// task 13
// function changeEven(numbers, value) {
//     // Change code below this line
//     const tmpArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         tmpArray.push(numbers[i] + value);
//       } else {
//           tmpArray.push(numbers[i]);
//       }
//     }
//     return tmpArray;
//     // Change code above this line
//}
//   console.log(changeEven([1, 2, 3, 4, 5], 10));

// //task 17
// const usersAll = 
// [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ]; 
// const getUserNames = users => 
//      users.map(userNames => userNames.name);   
// console.log(usersAll);

// //task 24 
// // user as same as task 17
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => 
// users.filter(tmpFriends => tmpFriends.friends.includes(friendName));
// // Change code above this line
// console.log(getUsersWithFriend(usersAll, "Goldie Gentry"));

// //task 25
// // user as same as task 17
// // Change code below this line
// const getFriends = (users) => {
//     const allUsersFriends = users.flatMap(tmpUsersFriens => tmpUsersFriens.friends);
//     return allUsersFriends.filter((element, index, array) => array.indexOf(element) === index);
//   };
//   // Change code above this line


// const all = ['apple', 'tomato', 'orange','potato', 'mushroom', 'dragonfruit'];
// const vegetables = ['tomato', 'potato', 'mushroom'];
// const fruit = [];

// for (let i = 0; i<all.length; i++) {
//     let flagIsVegetable = false;
//     for(let j = 0; j<vegetables.length; ++j) {
//         console.log(j);
//         if(all[i] === vegetables[j]) { // check all[i] is vegetable
//             flagIsVegetable = true;                 // all[i] is vegetable     
//             break;          // no reasons to check out
//         } 
//     }
//     if (!flagIsVegetable) {         // check flag
//         fruit.push(all[i]);
//     }
// }
// console.log(fruit);

// const cards = ["privat", "alfabank", "monobank"];
// const input = prompt("enter card name");
// console.log(input);
// let hasCard = false;

// for (const card of cards) {
// 	if (card === input) {
// 		hasCard = true;
// 		break;
// 	}
// }

// if (!hasCard) {
// 	alert("card is not in the list");
// }
