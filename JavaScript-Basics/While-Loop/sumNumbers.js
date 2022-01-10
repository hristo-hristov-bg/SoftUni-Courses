function sumNumbers(input){

    let index = 0;
    let num = Number(input[index]);
    index++;

    let sum = 0;

    while (num > sum){
    let currentNumber = Number(input[index]);
    sum += currentNumber;
    
    index++;
    }
   console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])


