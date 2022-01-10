function andProcessors(input) {

    let processorsNumber = Number(input[0]);
    let employeesNumber = Number(input[1]);
    let days = Number(input[2]);

    let workedHoursSum = employeesNumber * days * 8;
    let producedProcessors = Math.floor(workedHoursSum / 3);
    let profit = (producedProcessors - processorsNumber) * 110.10;
    let loses = (processorsNumber - producedProcessors) * 110.10;

    if (producedProcessors >= processorsNumber) {
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    } else if (producedProcessors < processorsNumber) {
        console.log(`Losses: -> ${loses.toFixed(2)} BGN`);
    }

}
andProcessors(["150",
    "7",
    "18"]);