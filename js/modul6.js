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