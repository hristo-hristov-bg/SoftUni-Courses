function problem3(list) {
    let listOfProducts = list.shift().split('|');

    for (let i = 0; i < list.length; i++) {
        let tokens = list[i].split('%');

        let command = tokens[0];
        let product = tokens[1];
        let newProduct = tokens[2];

        switch (command) {
            case 'Important':
                if (listOfProducts.includes(product)) {
                    let index = listOfProducts.indexOf(product);
                    listOfProducts.splice(index, 1);
                    listOfProducts.unshift(product);
                } else {
                    listOfProducts.unshift(product);
                };
                break;
            case 'Add':
                if (!listOfProducts.includes(product)) {
                    listOfProducts.push(product);
                } else {
                    console.log('The product is already in the list.')
                };
                break;
            case 'Swap':
                if (listOfProducts.includes(product) && listOfProducts.includes(newProduct)) {
                    let index1 = listOfProducts.indexOf(product);
                    let index2 = listOfProducts.indexOf(newProduct);
                    let savedProduct = product;
                    listOfProducts.splice(index1, 1);
                    listOfProducts.splice(index2, 0, product);
                } else {
                    if (!listOfProducts.includes(product)) {
                        console.log(`Product ${product} missing!`);
                    }
                    if (!listOfProducts.includes(newProduct)) {
                        console.log(`Product ${newProduct} missing!`);
                    }
                };
                break;
            case 'Remove':
                if (listOfProducts.includes(product)) {
                    let index = listOfProducts.indexOf(product);
                    listOfProducts.splice(index, 1);
                } else {
                    console.log(`Product ${product} isn't in the list.`);
                };
                break;
            case 'Reversed':
                // for (let i = 0; i < listOfProducts.length / 2; i++) {
                //     let oldElement = listOfProducts[i];
                //     let previousIndex = listOfProducts.length - 1 - i;
                //     listOfProducts[i] = listOfProducts[previousIndex];
                //     listOfProducts[previousIndex] = oldElement;
                //   };
                listOfProducts.reverse();
                break;
            case 'Shop!':
                for (let i = 0; i < listOfProducts.length; i++) {
                    console.log(`${i + 1}. ${listOfProducts[i]}`)
                }

        }

    }
}

problem3(["eggs|milk|bread|fish",
"Important%bread",
"Swap%eggs%tomato",
"Shop!"]);