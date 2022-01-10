function evenPos(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i += 2) {
        even[even.length] = arr[i];
    }
    //let printed = even.split(',');
    console.log(even.join(' '));
}

evenPos(['20', '30', '40', '50', '60']);