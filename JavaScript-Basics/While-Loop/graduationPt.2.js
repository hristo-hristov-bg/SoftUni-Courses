function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;
    let avgGrade = 0;
    let counter = input.length - 1;
    let sumGrade = 0;
    let command = input[index];
    index++;


    while (command != "3" && command !== "2") {
        let grade = Number(command);
        sumGrade += grade;
        avgGrade = sumGrade / counter;
        if (index > 12){
            break;
        }
        command = input[index];
        index++;
    }

    if (counter >= 12) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    } else {
        console.log(`${name} has been excluded at ${counter - 1} grade`)
    }

}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

