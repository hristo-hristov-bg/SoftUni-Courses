function metricConverter(input){

    let num = Number(input[0]);
    let inputValue = input[1];
    let exitValue = input[2];

    if (inputValue === 'mm'){
        num = num / 1000;
    }else if (inputValue === 'cm'){
        num = num / 100;
    }else {
        num = num;
    }

    if (exitValue === 'm'){
        console.log(num.toFixed(3));
    } else if (exitValue === 'cm'){
        console.log((num * 100).toFixed(3));
    }else if (exitValue === 'mm'){
        console.log((num * 1000).toFixed(3));
    }
}
metricConverter(["45","cm","mm"]);