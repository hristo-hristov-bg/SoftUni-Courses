function bestPlayer(input) {

    let index = 0;
    let command = input[index];

    let bestPlayer = "";
    let currentGoals = 0;

    while (command !== "END") {
        let player = input[index];
        index++;
        let goals = Number(input[index]);
        index++;

        if (currentGoals < goals) {
            currentGoals = goals;
            bestPlayer = player;
        }
        command = input[index];
    }
    console.log(`${bestPlayer} is the best player!`);

    if (currentGoals >= 3) {
        console.log(`He has scored ${currentGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${currentGoals} goals.`);
    }
}
bestPlayer(['Petrov',
'2',
'Drogba',
'11',
'END']);