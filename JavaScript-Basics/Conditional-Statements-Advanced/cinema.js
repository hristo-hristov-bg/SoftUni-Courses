function cinema(input){

    let serviceType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    if (serviceType == "Premiere"){
        income = rows * columns * 12.00;
    } else if (serviceType == "Normal"){
        income = rows * columns * 7.50;
    }else if (serviceType == "Discount"){
        income = rows * columns * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])


