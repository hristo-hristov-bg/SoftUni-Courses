function changeBureau(input){

    let bitcoin = Number(input[0]) * 1168;
    let chineeseMoney = Number(input[1]) * 0.15 * 1.76;
    let comission = Number(input[2]);

    let euro = 0;
    let result = 0;
    let sum = 0;

    sum = bitcoin  + chineeseMoney;
    euro = sum / 1.95;
    comission = euro * 0.05;
    result = euro - comission;

    console.log(result.toFixed(2));
}
changeBureau(['1','5','5']);