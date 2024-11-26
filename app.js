// Part 1


for (let number = 1; number <= 100; number++){
  // console.log(number);
  
  // To check for a divisible number you have to use the Modulo % operator and check for no reminder 
  if( number % 3 == 0){
    console.log("Fizz");
  }
  else if(number % 5 == 0){
    console.log("Buzz");
  }
  else if(number % 3 == 0 && number % 5 == 0){
    console.log("Fizz Buzz");
  }
  else{
    console.log(number);
  }
} 

// Part 2   (Prime    Time)




let n = 4; 
let nextPrime = n + 1; 

while (true) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(nextPrime); i++) {
    if (nextPrime % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(nextPrime); 
    break;
  }
  else{
    console.log(nextPrime++);
  }
}
