function cake(input) {

    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    index = 2;
    let cakePiecesNumber = Number(input[index]);
    let cakeSize = cakeWidth * cakeLength;
    let takenPieces = 0;
    let command = input[index];

    index++;
    while (true) {
        if (command === "STOP") {
            console.log(`${cakeSize - takenPieces} pieces are left.`);
            break;
        }
        if (cakeSize <= takenPieces){
            console.log(`No more cake left! You need ${takenPieces - cakeSize} pieces more.`);
            break;
        }
        takenPieces += cakePiecesNumber;
        cakePiecesNumber = Number(input[index]);
        command = input[index];
        index++;
    }
    
}
cake(["20",
"10",
"20",
"30",
"40",
"50",
"60"])
