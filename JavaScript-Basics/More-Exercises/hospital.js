function hospital(input) {

    let period = Number(input[0]);
    let index = 1;
    let patient = Number(input[index]);
    index++;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let treatedPatientsSum = 0;
    let untreatedPatientsSum = 0;

    let doctors = 7;

    for (let i = 1; i <= period; i++) {
        let treatedPatientsPerDay = 0;
        let untreatedPatientsPerDay = 0;
        if (patient > doctors) {
            treatedPatientsPerDay += doctors;
            treatedPatients += treatedPatientsPerDay;
            treatedPatientsSum+=treatedPatientsPerDay;
            untreatedPatientsPerDay += patient - doctors;
            untreatedPatients += untreatedPatientsPerDay;
            untreatedPatientsSum+=untreatedPatientsPerDay;
        } else {
            treatedPatientsPerDay += patient;
            treatedPatients += treatedPatientsPerDay;
            treatedPatientsSum+= treatedPatientsPerDay;
        }
        if (i % 2 == 0) {
            if (treatedPatients < untreatedPatients) {
                treatedPatients = 0;
                untreatedPatients = 0;
                doctors++;
            }
        }
        patient = Number(input[index]);
        index++;
    }
    console.log(`Treated patients: ${treatedPatientsSum}.`);
    console.log(`Untreated patients: ${untreatedPatientsSum}.`);

}
hospital(['6','25','25','25','25','25','2']);