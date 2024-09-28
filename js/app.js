{
    // 40 - misol
    // function findMiddleNumber(arr) {
    //     let middleIndex = Math.floor(arr.length / 2);
    //     if (arr.length % 2 === 0) {
    //         return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    //     } else {
    //         return arr[middleIndex];
    //     }
    // }
    
    // console.log(findMiddleNumber([1, 2, 3, 4])); 
    
    // console.log(findMiddleNumber([1, 2, 3]));   
    
    
}


{
    // 41 - misol
    // const books = [
    //     { title: "Halqa", author: "Akrom Malik", read: false },
    //     { title: "Dunyoning ishlari", author: "O'tkir Hoshimov", read: true },
    //     { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true }
    // ];
    
    // function checkBooksReadStatus(books) {
    //     books.forEach((book, index) => {
    //         if (book.read) {
    //             console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi o'qilgan`);
    //         } else {
    //             console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi o'qilmagan`);
    //         }
    //     });
    // }
    
    // checkBooksReadStatus(books);

    
}

{
    // 42 - misol
    // function arrayToLengthObject(arr) {
    //     let obj = {};
    //     arr.forEach(item => {
    //         obj[item] = item.length;
    //     });
    //     return obj;
    // }
    
    // console.log(arrayToLengthObject(["text", "world", "laptop"])); 

    
}

{
    // 43 - misol
    // function multiplyObjectValues(obj, n) {
    //     let result = {};
    //     for (let key in obj) {
    //         result[key] = obj[key] * n;
    //     }
    //     return result;
    // }
    
    // const obj = { a: 2, b: 3, c: 4 };
    // console.log(multiplyObjectValues(obj, 3));
    
    
}

{
    // 44 - misol
    // function getLevel(n) {
    //     let result = [];
    //     for (let i = 1; i <= n; i++) {
    //         result.push(Math.pow(2, i));
    //     }
    //     return result;
    // }
    
    // console.log(getLevel(4));
    // console.log(getLevel(5));
    
}

{
    // 45 - misol
    // function countWords(arr) {
    //     let counts = {};
    //     arr.forEach(word => {
    //         counts[word] = (counts[word] || 0) + 1;
    //     });
    //     return counts;
    // }
    
    // const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    // console.log(countWords(animals));
    
    
}


{
    // 46 - misol
    // function squareArray(arr) {
    //     return arr.map(num => num * num);
    // }
    
    // console.log(squareArray([1, 2, 3, 4]));
    
    
}

{
    // 47 -misol
    // function sumPositiveNumbers(arr) {
    //     return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
    // }
    
    // console.log(sumPositiveNumbers([1, -4, 12, 0, -3, 29, -150]));
    
    
}

{
    // 48 - misol
    // function getInitials(str) {
    //     return str.split(' ').map(word => word[0]).join('');
    // }
    
    // console.log(getInitials("George Raymond Richard Martin"));
    
    
}

{
    // 49 - misol
    // function ageDifference(people) {
    //     people.sort((a, b) => a.age - b.age);
    //     const youngest = people[0].age;
    //     const oldest = people[people.length - 1].age;
    //     return oldest - youngest;
    // }
    
    // const people = [
    //     { name: "John", age: 13 },
    //     { name: "Mark", age: 56 },
    //     { name: "Rachel", age: 45 },
    //     { name: "Nate", age: 67 },
    //     { name: "Jeniffer", age: 65 }
    // ];
    
    // console.log(ageDifference(people));
    
    
}

{
    // 50 - misol
    // function singleNumber(nums) {
    //     let map = new Map();
        
 
    //     nums.forEach(num => {
    //         map.set(num, (map.get(num) || 0) + 1);
    //     });
        

    //     return [...map.keys()].filter(key => map.get(key) === 1);
    // }
    
    // console.log(singleNumber([4, 1, 2, 1, 2, 9, true]));
    
}


{
    // 51 - misol
    // function middleNumber(arr) {
    //     const n = arr.length;
    //     if (n % 2 === 1) {
         
    //         return arr[Math.floor(n / 2)];
    //     } else {
         
    //         const mid1 = arr[Math.floor(n / 2) - 1];
    //         const mid2 = arr[Math.floor(n / 2)];
    //         return (mid1 + mid2) / 2;
    //     }
    // }
    
    // console.log(middleNumber([1, 2, 3, 4, 5]));
    // console.log(middleNumber([1, 2, 3, 4]));
    
}

{
    // 52 - misol
    // let products = [
    //     {id: 1, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
    //     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
    //     {id: 3, name: "Macbook", price: 17000, rating: 4.7, discount: 40},
    //     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
    //   ];
      
    //   let filteredProducts = products.filter(product => product.id > 3);
    //   console.log(filteredProducts);
      
}

{
    // 53 - misol
    // function isAlphabetic(str) {
    //     return /^[a-zA-Z]+$/.test(str);
    //   }
      
    //   console.log(isAlphabetic("Hello"));
    //   console.log(isAlphabetic("Hello123"));
      
}

{
    // 54 - misol
//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const countOccurrences = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(countOccurrences);


}

{
    // 55 - misol
//     let str = "Hello world";

// let wordLengths = str.split(' ').map(word => word.length);
// console.log(wordLengths); // Output: [5, 5]

}

{
    // 56 - misol
//     let str2 = "salom dunyo";

// let hasSpace = str2.split('').some(char => char === ' ');
// console.log(hasSpace); // Output: true

}

{
    // 57 - misol
//     let obj = {a: 2, b: 5, c: 7};

// let concatenated = Object.entries(obj).map(([key, value]) => key + value);
// console.log(concatenated); // Output: ['a2', 'b5', 'c7']

}

{
    // 58 - misol
    // const pupils = [
    //     {name: "Elbek", procent: 95},
    //     {name: "Zafar", procent: 78},
    //     {name: "Aziz", procent: 83},
    //     {name: "Jasur", procent: 88},
    //     {name: "Bobur", procent: 66},
    //     {name: "Kamron", procent: 75},
    //   ];
      
    //   const { passed, failed } = pupils.reduce(
    //     (acc, pupil) => {
    //       pupil.procent >= 80 ? acc.passed++ : acc.failed++;
    //       return acc;
    //     },
    //     { passed: 0, failed: 0 }
    //   );
      
    //   console.log(`Passed: ${passed}, Failed: ${failed}`);
    //   // Output: Passed: 4, Failed: 2
      

}

