function days(month, year) {
 let days = new Date(year, month, 0).getDate();
 console.log(days);
}

days(1, 2012);
days(2, 2021);