function timePlus15Minutes(input){

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes >= 60){
        hour += 1;
        minutes = minutes - 60;
    }
    
    if (hour > 23 && minutes < 10){
        console.log(`0:0${minutes}`);
    } else if (hour > 23 && minutes >= 10){
        console.log(`0:${minutes}`);
    } else if (hour <= 23 && minutes < 10){
        console.log(`${hour}:0${minutes}`);
    } else if (hour <= 23 && minutes >= 10){
        console.log(`${hour}:${minutes}`);
    }
}
timePlus15Minutes(["12", "49"]);