let n = 50;
let sumFizz = 0;
for(i = 1; i<= 50;i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log(`FizzBuzz`);
    } else if (i % 5 == 0){
        console.log(`Buzz`);
    } else if (i % 3 == 0){
        console.log(`Fizz`);
        sumFizz += i;
    } else {
        console.log(`${i}`);
    }
}

console.log(`Tổng các số chia hết cho 3 là ${sumFizz}`);
