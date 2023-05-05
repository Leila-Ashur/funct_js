// Write a function that takes an array of numbers as 
// input and returns the sum of all the numbers
function sumNmbers(numb) {
    let sum = 0; 
  
    for (let i = 0; i < numb.length; i++) {
      sum += numb[i]; 
    }
  
    return sum; 
  }
  let numbers = [1, 2, 3, 4, 5];
let sum = sumNmbers(numbers);
console.log( sum);
   
// Write a function that takes two numbers as input and 
// returns true if their sum is greater than 100,And false
//  otherwise
function greater_Than(num1,num2) {
  

  let total=num1+num2
    if(total>100){
        return true
    }
    else{
        return false
    }
  }

console.log(greater_Than(30,75));
// Write a function that takes a string as input and returns 
// the number of vowels in the string
function countVowels(s) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }
  return count;
}

let str="Hajara"
result= countVowels(str)
console.log(result);



// Write a function that takes in a array of numbers
//  as a parameter and returns the second largest number
//  in the array

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
numb=[2,4,5,7,9]
result=secondLargest(numb)
console.log(result);

// Write a function that takes a string as a parameter and 
// returns true if the string is a palindrome and false
//  otherwise
function isPalindrome (str) {

     reversedStr=str.split("").reverse().join("")
    return str===reversedStr
}
console.log(isPalindrome("civic"))








  






   
    



