function problem2(list) {
    let listOfGenres = list.shift().split(' | ');
    for (let i = 0; i < list.length; i++) {
        let tokens = list[i].split(' ');
        if (tokens === 'Stop!') {
            break;
        }

        let command = tokens[0];
        let genre = tokens[1];
        let newGenre = tokens[2];

        switch (command) {
            case 'Join':
                if (!listOfGenres.includes(genre)) {
                    listOfGenres.push(genre);
                };
                break;
            case 'Drop':
                if (listOfGenres.includes(genre)) {
                    let index = listOfGenres.indexOf(genre);
                    listOfGenres.splice(index, 1);
                };
                break;
            case 'Replace':
                if (listOfGenres.includes(genre)) {
                    let index = listOfGenres.indexOf(genre);
                    listOfGenres.splice(index, 1, newGenre);
                };
                break;
        }

    }
    let favGenres = listOfGenres.join(' ')
    console.log(favGenres);
}

problem2(["Thriller | Young | Crime",
    "Join Political",
    "Replace Young Fairytale",
    "Stop!"]

)
