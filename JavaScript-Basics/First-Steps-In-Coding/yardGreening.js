function yardGreening(input) {

    let squareMeters = input[0];

    let pricePerSquareMeters = squareMeters * 7.61;
    let discount = pricePerSquareMeters * 0.18;
    let finalPrice = pricePerSquareMeters - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is ${discount} lv.`);

}
yardGreening([150]);