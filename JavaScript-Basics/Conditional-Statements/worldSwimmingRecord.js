function worldSwimmingRecord(input){

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsPerMeter = Number(input[2]);

    let timeSwimming = distanceInMeters * timeInSecondsPerMeter;
    let addedTime = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTime = timeSwimming + addedTime;

    if (totalTime < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else if (totalTime >= recordInSeconds){
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }  
}
worldSwimmingRecord(["55555.67","3017","5.03"]);