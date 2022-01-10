function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinute = Number(input[3]);
    let lateMinutes = 0;
    let lateHours = 0;

    if (arrivingHour === examHour && examMinute < arrivingMinute) {

        lateMinutes = arrivingMinute - examMinute;
        console.log("Late");
        console.log(`${lateMinutes} minutes after the start`);
    }else if(examHour < arrivingHour && examMinute <= arrivingMinute){
        
        lateHours = arrivingHour - examHour;
        lateMinutes = arrivingMinute - examMinute;
        console.log("Late");
        console.log(`${lateHours}:${lateMinutes} hours after the start`);
    }
}
onTimeForTheExam(["9",
    "00",
    "10",
    "30"]);