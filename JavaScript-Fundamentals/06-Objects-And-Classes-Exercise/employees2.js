function employees2(listOfEmployees) {
    for (let employee of listOfEmployees) {
        let employeeData = {
            name: employee,
            personalNumber: employee.length
        };

        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData["personalNumber"]}`)
    }
}

employees2([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);