function fruit (fruitName, weightInGr, pricePerKg) {
    let weightInkg = weightInGr / 1000;
    let price = weightInkg * pricePerKg;
    
    console.log(`I need $${price.toFixed(2)} to buy ${weightInkg.toFixed(2)} kilograms ${fruitName}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35)