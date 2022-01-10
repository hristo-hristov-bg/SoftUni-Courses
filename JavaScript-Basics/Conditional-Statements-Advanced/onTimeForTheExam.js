function onTimeForTheExam(input){

    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinute = Number(input[3]);

    if (hourOfExam == arrivingHour && arrivingMinute > minuteOfExam){
        console.log("Late");
        }else if (hourOfExam == arrivingHour && (minuteOfExam == arrivingMinute || arrivingMinute <= minuteOfExam - 30)){
            console.log("On time");
        } else if (hourOfExam == arrivingHour && (minuteOfExam == arrivingMinute || arrivingMinute > minuteOfExam + 30)){
            console.log("Early")
        }

        if (hourOfExam == arrivingHour && minuteOfExam > arrivingMinute){
                if (minuteOfExam - arrivingMinute < 9){
                    console.log(`0${minuteOfExam - arrivingMinute} minutes before the start`);
                } else{
                    console.log(`${minuteOfExam - arrivingMinute} minutes before the start`);
                }
        }else if (hourOfExam < arrivingHour){
            if (minuteOfExam - arrivingMinute < 9){
                console.log(`${hourOfExam - arrivingHour}:0${minuteOfExam - arrivingMinute} hours before the start`);
            } else {
                console.log(`${hourOfExam - arrivingHour}:${minuteOfExam - arrivingMinute} hours before the start`)
            }
        } else if (arrivingMinute - minuteOfExam < 60){
            if (arrivingMinute - minuteOfExam < 9){
                console.log(`0${arrivingMinute - minuteOfExam} minutes after the start`);
            } else{
                console.log(`${arrivingMinute - minuteOfExam} minutes after the start`);
            }
        } else if (arrivingHour - hourOfExam > 1){
            if (arrivingMinute - minuteOfExam <9){
                console.log(`${arrivingHour - hourOfExam}:0${arrivingMinute - minuteOfExam} hours after the start`);
            } else {
                console.log(`${arrivingHour - hourOfExam}:${arrivingMinute - minuteOfExam} hours after the start`);
            }
        }
            
    }
onTimeForTheExam(["11",
"30",
"8",
"12"])
