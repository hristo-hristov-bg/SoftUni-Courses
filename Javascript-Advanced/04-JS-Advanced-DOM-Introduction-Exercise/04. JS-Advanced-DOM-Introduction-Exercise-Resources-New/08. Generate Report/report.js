function generateReport() {
    let info = document.querySelectorAll('input');
    let table = document.querySelectorAll('tbody tr');

    let tableArray = new Array(table)[0];

    console.log(info);
    console.log(table);
    console.log(tableArray[0]);

    let output = [];

    for (let i = 0; i < table.length; i++) {
        let employerInfo = {};
        for (let j = 0; j < info.length; j ++) {
            if (info[j].checked == true) {
                let label = info[j].name;
                let result = tableArray[i].textContent.split('\n').map(x => x.trim(' ')).filter(x => x !== '')[j];
                employerInfo[label] = result;
            }
        }
        output.push(employerInfo);
    }

    console.log(output);

    let outputResult = JSON.stringify(output);
    let divOutput = document.getElementById('output');
    
    divOutput.textContent = outputResult;
    
}