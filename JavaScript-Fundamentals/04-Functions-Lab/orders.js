function orders(product, qty) {

    let result = 0;
    switch (product) {
        case 'coffee': 
        result = qty * 1.50;
        break;
        case 'water':
        result = qty * 1.00;
        break;
        case 'coke':
        result = qty * 1.40;
        break;
        case 'snacks':
        result = qty * 2.00;
    }

    console.log(result.toFixed(2));
}

orders('coffee',2)