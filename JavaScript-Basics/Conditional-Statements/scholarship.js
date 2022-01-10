function scholarship(input){

    let income = Number(input[0]);
    let averageDegree = Number(input[1]);
    let minWorkSalary = Number(input[2]);
    let socialScholarship = minWorkSalary * 0.35;;
    let excellentScholarship = averageDegree * 25;

    if (income < minWorkSalary && averageDegree > 4.50 && averageDegree < 5.50){
        if (socialScholarship > excellentScholarship){
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }else {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
        } 
    } else if (averageDegree >= 5.50){
        if (excellentScholarship >= socialScholarship){
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else {
        console.log('You cannot get a scholarship!');
    }
}
scholarship(["100.00",
"5.60",
"200.00"]);