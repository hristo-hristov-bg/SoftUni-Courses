function sequence(input) {

    let n = Number(input[0]);

    let sequenceNumber = 1;
    while (n >= sequenceNumber) {
        console.log(sequenceNumber);
        sequenceNumber = (sequenceNumber * 2) + 1;

    }
}
sequence(["31"]);