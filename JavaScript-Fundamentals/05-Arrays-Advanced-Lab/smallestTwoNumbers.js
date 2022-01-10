function smallestTwoNumbers(arr) {

    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    });

    console.log(sortedInAscending.slice(0, 2).join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);