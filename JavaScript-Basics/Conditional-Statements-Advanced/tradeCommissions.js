function tradeCommissions(input){

    let city = input[0];
    let sales = Number(input[1]);
    let commisiions = 0;

    if (sales >= 0 && sales <= 500){
        switch(city){
            case "Sofia":
                commisiions = sales * 0.05; break;
            case "Varna":
                commisiions = sales * 0.045; break;
            case "Plovdiv":
                commisiions = sales * 0.055; break;
            default:
                console.log("error"); break;
        }
        console.log(commisiions.toFixed(2));
    }else if (sales > 500 && sales <= 1000){
        switch (city){
            case "Sofia":
                commisiions = sales * 0.07; break;
            case "Varna":
                commisiions = sales * 0.075; break;
            case "Plovdiv":
                commisiions = sales * 0.08; break;
            default:
                console.log("error"); break;
        }
        console.log(commisiions.toFixed(2));
    } else if (sales > 1000 && sales <= 10000){
        switch (city){
            case "Sofia":
                commisiions = sales * 0.08; break;
            case "Varna":
                commisiions = sales * 0.10; break;
            case "Plovdiv":
                commisiions = sales * 0.12; break;
            default:
                console.log("error"); break;
        }
        console.log(commisiions.toFixed(2));
    } else if (sales > 10000){
        switch (city){
            case "Sofia":
                commisiions = sales * 0.12; break;
            case "Varna":
                commisiions = sales * 0.13; break;
            case "Plovdiv":
                commisiions = sales * 0.145; break;
            default:
                console.log("error"); break;
        }
        console.log(commisiions.toFixed(2));
    } else {
        console.log("error");
    }
   
}
tradeCommissions(["Bourgas",
"1500"])


