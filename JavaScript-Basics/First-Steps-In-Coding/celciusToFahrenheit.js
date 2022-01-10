function celciusToFahrenheit(input){

    let celcius = Number(input[0]);

    let fahrenheit = (celcius * 1.8) + 32;

    console.log(fahrenheit.toFixed(2));

}
celciusToFahrenheit(['0']);