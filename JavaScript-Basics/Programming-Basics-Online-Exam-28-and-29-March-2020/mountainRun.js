function mountainRun(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let georgeTime = distance * time;
    let slowingDown = (Math.floor(distance / 50)) * 30;
    let sumTime = georgeTime + slowingDown;

    if (sumTime < record) {
        console.log(`Yes! The new record is ${sumTime.toFixed(2)} seconds.`);
    } else {
        let timeNeeded = sumTime - record;
        console.log(`No! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}
mountainRun(['1377', '389', '3']);