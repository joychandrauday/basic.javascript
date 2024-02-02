console.log('=============Basic Print=============')
for (let i = 0; i <= 60; i++) {
    console.log('I will invest at least 6 hrs every single day for next 60 days!')
    
}
console.log('=============Find all the odd numbers from 61 to 100.=============')
for (let i = 61; i<=100; i=i+2) {
    console.log(i);
    
}
console.log('=============Find all the even numbers from 78 to 98.=============')
for (let i = 78; i<=98; i=i+2) {
    console.log(i);
    
}
console.log('=============Display sum of all the odd numbers from 91 to 129.=============')
let sumNum9=0;
for (let i = 91; i<=129; i=i+2) {
    console.log(i);
    sumNum9=sumNum9+i;
}
console.log('the sumation of the odd numbers is',sumNum9);

console.log('=============Display sum of all the even numbers from 51 to 85.=============')
let sumNum10=0;
for (let i = 52; i<=85; i=i+2) {
    console.log(i);
    sumNum10=sumNum10+i;
}
console.log('the sumation of the even numbers is',sumNum10);

console.log('=============Multiplication Table.=============')
let n=9;
console.log('Multiplication Table of 9')
for (let i = 1; i<=10; i=i+1) {
    console.log(n,"*",i,"=",n*i);
}

console.log('=============Implement a countdown timer that counts down from 81 to 65.=============')
for (let i = 81; i>=65; i=i-1) {
    console.log(i);
    if (i<71) {
        break
    }
}