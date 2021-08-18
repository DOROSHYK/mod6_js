   //1 /////
   
   // function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //   }
// рішення 2
//     orderedItems.forEach(function (orderedItem) { totalPrice += orderedItem;})

//     // return totalPrice;
// console.log(totalPrice)
//   // Пиши код выше этой строки
   
// }

// calculateTotalPrice([1, 2, 3, 4]);

// 2////

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }
// рішення 2
//     numbers.forEach((number)=> {
//         if(number > value){filteredNumbers.push(number);}
        
        
//   });
  
//     // Пиши код выше этой строки
//     console.log(filteredNumbers) ;
// }
  
// filterArray([1, 2, 3, 4], 2);

///3//////
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
    // Пиши код ниже этой строки
  
   //  for (let i = 0; i < firstArray.length; i += 1) {
   //    if (secondArray.includes(firstArray[i])) {
   //      commonElements.push(firstArray[i]);
   //    }
   //  }

   // рішення 2
//    firstArray.forEach((firstArr) => {
//       if (secondArray.includes(firstArr)) {
//          commonElements.push(firstArr);
//       }
     
//       ;})


//     console.log(commonElements) ;
//     // Пиши код выше этой строки
//   }

// getCommonElements([1, 2, 3], [2, 1, 17, 19])

// 9

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
// numbers.forEach(number => {
//    if (number % 2 === 0) {
//       number += value;
      
//       } newArray.push(number);
//     })
//    console.log(newArray);
//     // Пиши код выше этой строки
// }
// const numbers = [1, 2, 3, 4, 5];
// const pureMultiply = changeEven(numbers, 10);
// console.log(numbers);

// palindrom
// function palindrome(string){
//     var reverseString = '';
//     for(var k in string){
//        reverseString += string[(string.length - k) - 1];
//     }
//   if(string === reverseString){
//     console.log('Hey there palindrome');
//   }else{
//     console.log('You are not a palindrome');
//   }
// }
// palindrome("mam");

// 15////
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// // console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

// 16////
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

// 18///////

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// const getUsersWithEyeColor = (users, color) => {
//    users.filter(user => user.eyeColor === color);
// };

// console.log(users);

// 20////
// const users = [
//    {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male',
//       age: 37
//    },
//    {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female',
//       age: 34
//    },
//    {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male',
//       age: 24
//    },
//    {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female',
//       age: 21
//    },
//    {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male',
//       age: 27
//    },
//    {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male',
//       age: 38
//    },
//    {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female',
//       age: 39
//    }
// ];

// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends);


// };
 
// getUsersWithFriend;

// 21////
// const getFriends = (users) => {
//   return users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index)
// };

// getFriends();


// 32////
// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => 
//   user.balance + acc, 0)
// };

// 41/////

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
//    .sort((a, b) => a.author.localeCompare(b.author))
//    .map(book => book.author);

// console.log(names);

// 43/////////

// const usersFrend = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// const getSortedFriends = users => {
//    return users
//       .flatMap(user => user.friends)
      
//       .filter((elem, index, arr) => arr.indexOf(elem) === index)
//       .sort((a, b) => a.localeCompare(b))
// };

// console.log(getSortedFriends(usersFrend));


// 44/////

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// const getTotalBalanceByGender = (users, gender) => {
//    return users.filter(user => user.gender === gender).reduce((acc, value) => acc + value.balance, 0)
// };
//  console.log(getTotalBalanceByGender(users, 'female' ));
// console.log(getTotalBalanceByGender(users, 'male' ));




/**
 * Напиши функцию getAllPropValues(propName)
 * которая вернет все значения заданного
 * свойства
 * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') возвращает []
 */

// const products = [
//   { name: 'Asus', price: 1300, quantity: 4 },
//   { name: 'Huawei', price: 2700, quantity: 3 },
//   { name: 'HP', price: 400, quantity: 7 },
//   { name: 'Dell', price: 1200, quantity: 9 },
//   { name: 'Apple', price: 1400 },
// ];

// const getAllPropValues = propName => {
//  return products.map(elem => elem[propName])
//     .filter(product => product !== undefined);
// };

// 2/////


// console.log(getAllPropValues('name')); // ['Asus', 'Huawei', 'HP', 'Dell', 'Apple']
// console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]

// console.log(getAllPropValues('category')); // []




// Коллекция записей
// Вам дается буквальный объект, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы содержат полную информацию.

// Вы начинаете с updateRecordsфункции, которая принимает объектный литерал, recordsсодержащий коллекцию музыкальных альбомов, an id, a prop(like artistor tracks) и a value. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию.

// Ваша функция всегда должна возвращать весь объект коллекции записей.
// // Если propнет , tracksи valueне пустая строка, обновление или набор этого альбома propв value.
// Если propесть, tracksно у альбома нет tracksсвойства, создайте пустой массив и добавьте valueк нему.
// Если propесть tracksи valueне является пустой строкой, добавьте valueв конец существующего tracksмассива альбома .
// Если valueэто пустая строка, удалите данное propсвойство из альбома.

var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
// function updateRecords(records, id, prop, value){
//   if (value === "") {
//     delete records[id][prop];
//   } 
//   else if (prop === "tracks") {
//     records[id][prop] = records[id][prop] || [];
//    records[id][prop].push(value); 
//   }
//   else {
//     records[id][prop] = value
//   }
  
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
////////////////////////////////
///////////////////////////////

// Объявить и инициализировать переменную totalв 0. Используйте forцикл, чтобы добавить значение каждого элемента myArrмассива total.
// var myArr = [ 2, 3, 4, 5, 6];
// var total = 0;
// for (var i = 0; i < myArr.length; i++) {
//   console.log(total += myArr[i]);
  

// }

//////////////////////////////////////////////////////////////////////
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//   for (var i = 0; i < arr.length; i++) {
//   //  product += arr[i];
//     for (var b = 0; b < arr[i].length; b++) {
//      console.log(product *= arr[i][b]);
//     }
//   }
//   console.log(product);
//   // Only change code above this line
// // return product;
// }

// multiplyAll([[1],[2],[3]]);

// palindrome/////////////////////////////////////////////

  function palindrome(str){
    var reverseString = str.toLowerCase();
    // console.log(reverseString.split('').join('').replace(/[\s.,%]/g, ''));
    for (let i = 0; i < reverseString.length / 2; i += 1) {
      // console.log(reverseString.length / 2);
      if(reverseString !== reverseString.split('').reverse().join('').replace(/[\s.,%]/g, '').length -1){
    console.log(false);
  }else {
   console.log(true);
  }
    }
  
  
}




palindrome("A man, a plan, a canal. Panama");
// str.replace(/[\s.,%]/g)