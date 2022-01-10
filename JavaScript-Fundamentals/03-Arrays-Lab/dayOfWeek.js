function dayOfWeek(n) {
    let day = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday', 
        'Saturday', 
        'Sunday'
    ];
    if (n > 0 && n < 8) {
        console.log(day[n - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(11);