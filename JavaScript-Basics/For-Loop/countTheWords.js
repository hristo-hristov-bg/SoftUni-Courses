function countTheWords(input) {

    let words = input[0];

    let spaceCounter = 0;

    for (let i = 0; i <= words.length; i++) {
        let currentLetter = words[i];

        switch (currentLetter) {
            case " ":
                spaceCounter++;
        }
    }
    if (spaceCounter >= 10) {
        console.log(`The message is too long to be send! Has ${spaceCounter + 1} words.`);
    } else {
        console.log("The message was send successfully!");
    }

}
countTheWords(["This message has ten words and you can send it!"]);