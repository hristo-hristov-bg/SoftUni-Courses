function roadRadar(speed, area) {
    // switch (area) {
    //     case 'motorway':
    //         if (speed > 130 && speed <= 150) {
    //             console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`);
    //         } else if (speed > 150 && speed <= 190) {
    //             console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
    //         } else if (speed > 190) {
    //             console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`);
    //         } else if (speed <= 130) {
    //             console.log(`Driving ${speed} km/h in a 130 zone`);
    //         };
    //         break;
    //     case 'interstate':
    //         if (speed > 90 && speed <= 110) {
    //             console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`);
    //         } else if (speed > 110 && speed <= 150) {
    //             console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
    //         } else if (speed > 150) {
    //             console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`);
    //         } else if (speed <= 90) {
    //             console.log(`Driving ${speed} km/h in a 90 zone`);
    //         };
    //         break;
    //     case 'city':
    //         if (speed > 50 && speed <= 70) {
    //             console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`);
    //         } else if (speed > 70 && speed <= 110) {
    //             console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
    //         } else if (speed > 110) {
    //             console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`);
    //         } else if (speed <= 50) {
    //             console.log(`Driving ${speed} km/h in a 50 zone`);
    //         };
    //         break;
    //     case 'residential':
    //         if (speed > 20 && speed <= 40) {
    //             console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`);
    //         } else if (speed > 40 && speed <= 80) {
    //             console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
    //         } else if (speed > 80) {
    //             console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`);
    //         } else if (speed <= 20) {
    //             console.log(`Driving ${speed} km/h in a 20 zone`);
    //         };
    //         break;

    // }

    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let difference = 0;
    let speedZone = 0;
    let overlimit = '';

    switch (area) {
        case 'motorway':
            speedZone = motorwaySpeed;
            break;
        case 'interstate':
            speedZone = interstateSpeed;
            break;
        case 'city':
            speedZone = citySpeed;
            break;
        case 'residential':
            speedZone = residentialSpeed;
            break;
    }

    if (speed > speedZone) {
        difference = speed - speedZone;
    }

    if (difference > 0) {
        if (difference <= 20) {
            overlimit = 'speeding';
        } else if (difference <= 40) {
            overlimit = 'excessive speeding';
        } else {
            overlimit = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${overlimit}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }
}

roadRadar(200, 'motorway');