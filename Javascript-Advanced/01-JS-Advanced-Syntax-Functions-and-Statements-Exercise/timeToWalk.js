function timeToWalk(steps, footprint, kmph) {
    // let distance = a * b; //in meters
    // let timeForRest = Math.floor(distance / 500) / 60;
    // let timeInHours = ((distance / 1000) / c) + timeForRest;
    // let timeNeeded = timeInHours * 60;
    

    // console.log(timeInHours)
        function formatNumber(number) {
            if (number < 10) {
                return '0' + number.toString()
            } else {
                return number
            }
        }
        let distance = steps * footprint;
        let mph = kmph * 1000;
        let minutesRestBreak = Math.floor(distance / 500) / 60;
        let travelTime = (distance / mph) + minutesRestBreak;
        let hours = Math.floor(travelTime)
        let minutes = Math.floor(travelTime * 60);
        let seconds = Math.round(((travelTime * 60) - minutes) * 60);
        console.log(`${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`);
    
    
}

timeToWalk(4000, 0.60, 5);