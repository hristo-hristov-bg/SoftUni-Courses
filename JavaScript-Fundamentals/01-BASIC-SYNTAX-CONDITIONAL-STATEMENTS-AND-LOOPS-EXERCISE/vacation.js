function vacation(groupNum, type, day) {
    let singlePrice = 0;
    let groupPrice = 0;

    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                singlePrice = 8.45;
                groupPrice = singlePrice * groupNum;
            } else if (type === 'Business') {
                singlePrice = 10.90;
                groupPrice = singlePrice * groupNum;
            } else if (type === 'Regular') {
                singlePrice = 15;
                groupPrice = singlePrice * groupNum;
            }
            break;
        case 'Saturday':
            if (type === 'Students') {
                singlePrice = 9.80;
                groupPrice = singlePrice * groupNum;
            } else if (type === 'Business') {
                singlePrice = 15.60;
                groupPrice = singlePrice * groupNum;
            } else if (type === 'Regular') {
                singlePrice = 20;
                groupPrice = singlePrice * groupNum;
            }
            break;
        case 'Sunday':
            if (type === 'Students') {
                singlePrice = 10.46;
                groupPrice = singlePrice * groupNum;
            } else if (type === 'Business') {
                singlePrice = 16;
                groupPrice = singlePrice * groupNum;
            } else if (type === 'Regular') {
                singlePrice = 22.50;
                groupPrice = singlePrice * groupNum;
            }
            break;
    }
    if (type === 'Students' && groupNum >= 30) {
        groupPrice *= 0.85;
    }
    if (type === 'Business' && groupNum >= 100) {
        groupPrice = groupPrice - (singlePrice * 10);
    }
    if (type === 'Regular' && groupNum >= 10 && groupNum <= 20) {
        groupPrice *= 0.95;
    }
    console.log(`Total price: ${groupPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"      
    )