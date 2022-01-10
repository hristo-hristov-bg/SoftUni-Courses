function cake2(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    index = 2;
    let command = input[index];
    let cakeSize = cakeWidth * cakeLength;
    let totalPiecesTaken = 0;
    index++;

    while (command !== "STOP") {
        let piecesTaken = Number(command);

        totalPiecesTaken += piecesTaken;

        if (totalPiecesTaken >= cakeSize) {
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "STOP") {
        console.log(`${cakeSize - totalPiecesTaken} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${totalPiecesTaken - cakeSize} pieces more.`);
    }
}
cake2(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

