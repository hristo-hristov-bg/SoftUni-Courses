function vacationBookList(input){

    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDaysForReading = Number(input[2]);

    let sumOfReadingTime = numberOfPages / pagesPerHour;
    let hoursForReadingPerDay = sumOfReadingTime / numberOfDaysForReading;

    console.log(hoursForReadingPerDay);

}
vacationBookList(["432","15","4"]);