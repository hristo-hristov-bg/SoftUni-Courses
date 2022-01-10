class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            this.availableProducts.push({
                type,
                quantity,
                price
            });

            if (this.availableProducts[type]) {
                if (this.availableProducts.price < price){
                    this.availableProducts[type] += quantity;
                }
            }
            
        });
        console.log(this.availableProducts)
        //return `Successfully added {type1}, {type2}, …{typeN}`


    }

    buyingVegetables(selectedProducts) {

    }

    rottingVegetable(type, quantity) {

    }

    revision() {

    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
