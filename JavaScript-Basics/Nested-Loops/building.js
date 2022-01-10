function building(input){

    let floors = Number(input[0]);
    let roomNumber = Number(input[1]);

    for(let i = floors; i > 0; i--){
        let result = "";
        for(let j = 0; j < roomNumber; j++){
            if(i === floors){
            result+= "L" + i + j + " ";
            }else if(i % 2 === 0){
                result+= "O" + i + j + " ";
            }else {
                result+= "A" + i + j + " ";
            }
        }
        console.log(result);
    }
}
building(["6", "4"]);