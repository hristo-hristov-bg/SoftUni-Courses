function godzillaVsKong(input){

    let budget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceForStatitsClothes = Number(input[2]);

    let filmDecor = budget * 0.10;
    if (countStatists > 150){
        priceForStatitsClothes = priceForStatitsClothes * 0.90;
    }
    
    let filmCosts = filmDecor + (countStatists * priceForStatitsClothes);

    if (filmCosts > budget){
        console.log('Not enough money!');
        console.log(`Wingard needs ${(filmCosts - budget).toFixed(2)} leva more.`);
    } else if (filmCosts <= budget) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${Math.abs(filmCosts - budget).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])
;