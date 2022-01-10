function fishTank(input){

    let lenghtInCm = Number(input[0]);
    let wideInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenghtInCm * wideInCm * heightInCm;
    let litresNeeded = volume * 0.001;
    let percantage = percent * 0.01;

    let totalLitresNeeded = litresNeeded * (1 - percantage);

    console.log(totalLitresNeeded);

}
fishTank(["85","75","47","17"]);