function barcodeGenerator(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let printLine = '';

    for (let i = x; i <= y; i++) {
        let currentNum = "" + i;
        let counter = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            
            if (currentDigit % 2 == 0) {
                break;
            }else {
                counter++;
            }
        }
        if(counter === 4){
            printLine += `${i} `;
        }
        counter = 0;
    }
    console.log(printLine);
}
barcodeGenerator(['3354','6789']);