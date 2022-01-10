function softuniBar(input) {
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|.*?(-?\d+(?:\.\d+)?)\$/;
    let total = 0;

    while(input[0] != 'end of shift') {

        let line = input.shift();

        let match = pattern.exec(line);

        if (match != null) {
            let [_, name, product, price, qty] = match;
            qty = Number(qty)
            price = Number(price);

            total += price * qty;

            console.log(`${name}: ${product} - ${(price * qty).toFixed(2)}`)
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`)
}

softuniBar([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"
]);
softuniBar([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"
]);