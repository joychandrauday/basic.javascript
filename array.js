// sum of the array numbers
let sum=0;
const numbers=[1,23,5,66,44,74,88];
for (let index = 0; index < numbers.length; index++) {
    
    sum+= numbers[index];
    
}
console.log('the sum of the numbers of array is :',sum);
// average 
let averAge=sum/numbers.length
console.log('the average of the numbers of array is :',averAge);


// printing array elements
console.log('==========printing array elements==========')

const people=['mark','bejos','steve','elon','buffet'];
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}


// reverse array elements
console.log('==========reverse array elements==========')
const reversed= numbers.reverse();
console.log(reversed);