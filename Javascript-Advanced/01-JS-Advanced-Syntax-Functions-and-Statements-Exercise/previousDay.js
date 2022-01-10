function day(year, month, day) {
    // let myDay = new Date(year, month, day - 1).getDate();
    // let myMonth = new Date(year, month, day - 1).getMonth();
    // let myYear = new Date(year, month, day - 1).getFullYear();
    // console.log(`${myYear}-${myMonth}-${myDay}`);
   
    let dataString = year + '-' + month + '-' + day;
    let event = new Date(dataString);

    event.setDate(day-1);
    console.log(event.getFullYear() + '-' + (Number(event.getMonth()) + 1) + '-' + event.getDate());
}

day(2016, 9, 30);

console.log('--------------');

day(2016, 10, 1);