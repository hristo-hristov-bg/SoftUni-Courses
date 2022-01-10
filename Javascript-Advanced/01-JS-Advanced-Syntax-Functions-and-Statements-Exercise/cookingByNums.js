function cooking(start, op1, op2, op3, op4, op5) {

    let num = Number(start);
    switch (op1) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num++;
            console.log(num);
            break;
        case 'bake':
            num = num * 3;
            console.log(num);
            break;
        case 'fillet':
            num = num * 0.8;
            console.log(num);
            break;
    }
    switch (op2) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num++;
            console.log(num);
            break;
        case 'bake':
            num = num * 3;
            console.log(num);
            break;
        case 'fillet':
            num = num * 0.8;
            console.log(num);
            break;
    }
    switch (op3) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num++;
            console.log(num);
            break;
        case 'bake':
            num = num * 3;
            console.log(num);
            break;
        case 'fillet':
            num = num * 0.8;
            console.log(num);
            break;
    }
    switch (op4) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num++;
            console.log(num);
            break;
        case 'bake':
            num = num * 3;
            console.log(num);
            break;
        case 'fillet':
            num = num * 0.8;
            console.log(num);
            break;
    }
    switch (op5) {
        case 'chop':
            num /= 2;
            console.log(num);
            break;
        case 'dice':
            num = Math.sqrt(num);
            console.log(num);
            break;
        case 'spice':
            num++;
            console.log(num);
            break;
        case 'bake':
            num = num * 3;
            console.log(num);
            break;
        case 'fillet':
            num = num * 0.8;
            console.log(num);
            break;
    }

}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')