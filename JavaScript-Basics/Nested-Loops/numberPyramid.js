function numberPyramid(input){

    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for(let i = 1; i <= n;i++){
        for(j = 1; j <= i; j++){
            if(current > n){
                isBigger = true;
                break;
            }
            printCurrentLine+= current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }

}
numberPyramid(["7"]);