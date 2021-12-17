//
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   let i = 0;
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//       values[keys.indexOf(key)] = apartment[key];
//         //i++;
//   }

//   console.log(keys);
//   console.log(values);

// //task 19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const tmpValuesProperties = [];
//     for (const tmpProduct of products) {
//         // console.log(tmpProduct[propName]);
//         if (tmpProduct.hasOwnProperty(propName)) {
//             tmpValuesProperties.push(tmpProduct[propName]);
            
//         }
//     }
//     console.log(tmpValuesProperties);
//     return tmpValuesProperties;
//     // Change code above this line
//   }

//   getAllPropValues("name");

//task 20
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   let tmpTotalPrice = 0;
//     for (const tmpProduct of products) {
//         if (tmpProduct.name === productName) {
//          return tmpProduct.price*tmpProduct.quantity;
//       }
//     }
//   return 0;
  
//     // Пиши код выше этой строки
//   }


// //task 30
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//    const tmpData = {category, priority, ...data, completed};
//    return tmpData;
//     // Change code above this line
//   }
//   console.log(makeTask({text: "kvlkvj"}));
  
////task 31
//// Change code below this line
// function add(...args) {
//     let summ = 0;
//     for (const tmparg of args) {
//         summ+=tmparg;
//     }
//     return summ;
//     // Change code above this line
//   }
//   console.log(add(2,1,5));

// //task 33
// // Change code below this line
// function findMatches(array, ...restArray) {
//     const matches = []; // Don't change this line
//       for (const tmpVar of restArray) {
//           if (array.includes(tmpVar)){
//               matches.push(tmpVar);
//           }
//       }
//     // Change code above this line
//     return matches;
//   }
//   console.log(findMatches([1,2,3], 3,5,1, 1));
  
//   //task 35
//   const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
  
  
//       // Change code above this line
//     },
//   };

// // task 39 
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//       const tmpIndexRemove = this.potions.indexOf(potionName);
//       this.potions.splice(tmpIndexRemove,1);
//       console.log(this.potions);
//       // Change code above this line
//     },
//   };
//   console.log(atTheOldToad.potions);
//   console.log(atTheOldToad.removePotion("Dragon breath"));

// //task 40
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//       const tmpIndexReplace = this.potions.indexOf(oldName);
//       this.potions.splice(tmpIndexReplace, 1, newName);
//   //       console.log(this.potions);
//       // Change code above this line
//     },
//   };
//    console.log(atTheOldToad.potions);
//    console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

//task 41
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       const tmpArrayNames = [];
//       for (const tmpPotion of this.potions) {
//           tmpArrayNames.push(tmpPotion.name);
//       }
//       if (tmpArrayNames.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
  
//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const tmpArrayNames = [];
//       for (const tmpPotion of this.potions) {
//           tmpArrayNames.push(tmpPotion.name);
//       }
//       const potionIndex = tmpArrayNames.indexOf(potionName);
      
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const tmpArrayNames = [];
//       for (const tmpPotion of this.potions) {
//           tmpArrayNames.push(tmpPotion.name);
//       }
//       const potionIndex = tmpArrayNames.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
//          this.potions[potionIndex].name = newName;
//       //this.potions.splice(potionIndex, 1, );
//     },
//     // Change code above this line
//   };
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
    },
  
  addPotion(newPotion) {
    const array = [...this.potions];
    //  for (const potion of this.potions) {
    //    array.push(potion.name);
    //  }
    //console.log(array);
    if (array.includes(newPotion)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
      this.potions.push(newPotion);
      return newPotion;
    },
  
  removePotion(potionName) {
    const array = [...this.potions];
    //     for (const potion of this.potions) {
    //    array.push(potion.name);
    //  }

        const potionIndex =  array.indexOf(potionName); 
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
    },
  
  updatePotionName(oldName, newName) {
    const array = [];
    for (const potion of this.potions) {
      array.push(potion.name);
    }
    const potionIndex = array.indexOf(oldName);
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
      this.potions[potionIndex].name = newName;
      return
  },
  // Change code above this line  
};
console.log(...atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion("Dragon breath"));
console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.getPotions());

    