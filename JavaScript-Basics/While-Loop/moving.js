function moving(input){
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let cubicMeters = w * l * h;
    let command = input[index];
    index++;

    while(command !== "Done"){
        let box = Number(command);

        cubicMeters -= box;
        if (cubicMeters < 0){
            console.log(`No more free space! You need ${Math.abs(cubicMeters)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }
    if (cubicMeters >= 0){
        console.log(`${cubicMeters} Cubic meters left.`)
    }

}
moving(["10",
"1",
"2",
"4",
"6",
"Done"])