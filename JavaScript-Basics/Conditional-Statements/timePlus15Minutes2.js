function timePlus15Minutes2(input){

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes >= 60){
        hour += 1;
        minutes = minutes - 60;
    }
    if (hour >= 24){
        hour = hour - 24;
    }
    if (minutes > 9){
        console.log(`${hour}:${minutes}`);
    }else {
        console.log(`${hour}:0${minutes}`);
    }
}
timePlus15Minutes2(["1", "46"]);