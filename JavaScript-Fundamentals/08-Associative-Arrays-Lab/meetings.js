function meetings(input) {
    let meetingSchedule = {};
    for (let days of input) {
        let [day, name] = days.split(' ');

        if (meetingSchedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingSchedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [key, value] of Object.entries(meetingSchedule)) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);