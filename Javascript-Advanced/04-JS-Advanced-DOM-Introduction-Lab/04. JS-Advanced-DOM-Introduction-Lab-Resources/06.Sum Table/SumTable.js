function sumTable() {
    let sum = 0;
    let rows = document.querySelectorAll('table tr');
    for (let i = 1; i < rows.length; i++) {
        let cols = rows[i].children;
        let cost = cols[cols.length - 1].textContent;
        sum += Number(cost);
    }
    document.getElementById('sum').textContent = sum;
}