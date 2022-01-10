function sortArrByTwoCriteria(input) {
    input.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);
        
        return firstCriteria || secondCriteria;
        // = a.length - b.length(compare length) || a.localeCompare(b)(compare alphabetical)
    });

    console.log(input.join('\n'));
}

sortArrByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);