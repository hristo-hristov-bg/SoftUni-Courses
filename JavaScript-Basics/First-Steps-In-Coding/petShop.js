function petshop(input) {

    let dogsNumber = Number(input[0]);
    let otherPets = Number(input[1]);

    let expences = (dogsNumber * 2.5) + (otherPets * 4);

    console.log(`${expences} lv.`);

}
petshop([13,9]);