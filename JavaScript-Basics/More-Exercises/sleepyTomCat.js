function sleepyTomCat(input) {

    let days = Number(input[0]);

    let weekends = days * 127;
    let workDays = 0;
    let sumMinPlay = 0;
    let minLessForPlay = 0;
    let h = 0;
    let m = 0;
    let x = 0;

    workDays = (365 - days) * 63;
    sumMinPlay = weekends + workDays;
    minLessForPlay = Math.abs(30000 - sumMinPlay);
    h = Math.trunc(minLessForPlay / 60);
    x = (minLessForPlay / 60) - Math.trunc(minLessForPlay / 60);
    m = Math.round(x * 60);

    if (sumMinPlay > 30000) {
        console.log("Tom will run away");
        console.log(`${h} hours and ${m} minutes more for play`);
    } else if (sumMinPlay < 30000) {
        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`);
    }

}
sleepyTomCat(['113']);