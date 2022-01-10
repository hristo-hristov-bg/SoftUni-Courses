function dungeonestDark(string) {
    let room = '';
    let health = 100;
    let coins = 0;
    let firstPart = '';
    let secondPart = 0;
   

    for (let i = 0; i < string.length; i++) {

        if (string[i] !== '|') {
            room += string[i];
        } else {
            
            for (let j = 0; j < room.length; j++) {

                if (room[j] !== ' ') {
                    firstPart += room[j];
                } else {

                    for (let k = j+1; k < room.length; k++) {
                        secondPart += Number(room[k]);
                    }
                }
            }

        }
        
    }
}

dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");