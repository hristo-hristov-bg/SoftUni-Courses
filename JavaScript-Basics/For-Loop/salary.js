function salary(input) {

    let numberOfTabs = Number(input[0]);
    let employeeSalary = Number(input[1]);
    let penalty = 0;


    for (let i = 0; i <= input.length - 1; i++) {
        let website = input[i];

        switch (website) {
            case "Facebook":
                penalty += 150;
                break;
            case "Instagram":
                penalty += 100;
                break;
            case "Reddit":
                penalty += 50;
                break;
            default:
        }
        
    }
    if ((employeeSalary - penalty) <= 0) {
        console.log("You have lost your salary.");
    } else if ((employeeSalary - penalty) > 0){
        console.log(employeeSalary - penalty);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


