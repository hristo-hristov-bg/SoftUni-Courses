function birthdayParty(input) {

    let rent = Number(input[0]);

    let cake = (rent * 20) / 100;
    let drinks = cake - ((cake * 45) / 100);
    let animator = rent / 3;

    let budget = rent + cake + drinks + animator;

    console.log(budget);


}
birthdayParty([`3720`]);