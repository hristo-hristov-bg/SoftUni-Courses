function metricConverter(input){

    let num = Number(input[0]);
    let inputValue = input[1];
    let exitValue = input[2];

    if  (inputValue === 'mm' && exitValue === 'cm'){
        num = num / 10;
        console.log(num.toFixed(3));
    } else if (inputValue === 'mm' && exitValue === 'm'){
        num = num / 1000;
        console.log(num.toFixed(3));
    } else if (inputValue === 'cm' && exitValue === 'mm'){
        num = num * 10;
        console.log(num.toFixed(3));
    } else if (inputValue === 'cm' && exitValue === 'm'){
        num = num / 100;
        console.log(num.toFixed(3));
    } else if (inputValue === 'm' && exitValue === 'mm'){
        num = num * 1000;
        console.log(num.toFixed(3));
    } else if (inputValue === 'm' && exitValue === 'cm'){
        num = num * 100;
        console.log(num.toFixed(3));
    } else {
        console.log(num.toFixed(3));
    }
}
metricConverter(["45","cm","mm"]);