function storeCatalogue(arr) {
    const catalogue = {};

    arr.forEach(element => {
        let [product, price] = element.split(' : ');
        price = Number(price);

        let index = product[0];
        if(!catalogue[index]) {
            catalogue[index] = {};
        }

        catalogue[index][product] = price;
    });

    let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    
    for (let key of sorted) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(`${key}`);
        for (let prod of products) {
            console.log(`  ${prod[0]}: ${prod[1]}`)
        }
    }

}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)