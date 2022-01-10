function employees(list) {

    let employeeList = {};
    let listLength = list.length;

    for (let i = 0; i < listLength; i++) {
        let currentName = list.shift(list[i]);
        let personalNumber = 0;

        for (let digit of currentName) {
            personalNumber++;
        }
        employeeList.employeeName = currentName;
        employeeList.personalNum = personalNumber;
        console.log(`Name: ${employeeList.employeeName} -- Personal Number: ${employeeList.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );