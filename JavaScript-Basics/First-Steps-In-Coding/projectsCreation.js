function project(input) {

    let architectName = input[0];
    let projectNumber = Number(input[1]);

    let hoursNeeded = projectNumber * 3;

    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectNumber} project/s.`);


}
project(['Sanya', 9]);