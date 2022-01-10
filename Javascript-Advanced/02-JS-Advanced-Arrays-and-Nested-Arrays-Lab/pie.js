function pie(arr, start, end) {
    let startSlice = arr.indexOf(start);
    let endSlice = arr.indexOf(end) + 1;

    let result = arr.slice(startSlice,endSlice);

    return result;
}

console.log(pie(
    [   'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));