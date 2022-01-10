function hotelRoom(input){

    let month = input[0];
    let nights = Number(input[1]);

    let priceForApartment = 0;
    let priceForStudio = 0;

    switch(month){
        case "May":
        case "October":
            priceForApartment = nights * 65;
            priceForStudio = nights * 50;
            if (nights > 7 && nights <= 14){
                priceForStudio = priceForStudio * 0.95;
            } else if (nights > 14){
                priceForStudio = priceForStudio * 0.70;
                priceForApartment = priceForApartment * 0.90;
            }
            break;
        case "June":
        case "September":
            priceForStudio = nights * 75.20;
            priceForApartment = nights * 68.70;
            if (nights > 14){
                priceForStudio = priceForStudio * 0.80;
                priceForApartment = priceForApartment * 0.90;
            }
            break;
        case "July":
        case "August":
            priceForStudio = nights * 76;
            priceForApartment = nights * 77;
            if (nights > 14){
                priceForApartment = priceForApartment * 0.90;
            }
            break;
    }
    console.log(`Apartment: ${priceForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`)
    
}
hotelRoom(["June",
"14"])
;
