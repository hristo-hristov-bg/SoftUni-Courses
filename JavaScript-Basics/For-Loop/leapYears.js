function leapYears(input) {

    let leapYear = Number(input[0]);
    let randomYear = Number(input[1]);

    for (let i = leapYear; i <= randomYear; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }
    }
}
leapYears(["2020","2032"]);



