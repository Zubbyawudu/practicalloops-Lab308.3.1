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

// Prime    Time

// declaring n


for( let n = 2; n % 5 ; n --  )
  console.log(n);
