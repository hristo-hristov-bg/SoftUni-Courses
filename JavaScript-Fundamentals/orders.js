function orders(product, quantity) {
    switch(product) {
        case 'coffee':
            return (quantity * 1.50).toFixed(2);
        case 'water':
            return (quantity * 1).toFixed(2);
        case 'coke':
            return (quantity * 1.40).toFixed(2);
        case 'snacks':
            return (quantity * 2.00).toFixed(2);
    }
}
console.log(orders('water', '5'));