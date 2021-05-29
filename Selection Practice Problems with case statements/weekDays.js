const prompt = require('prompt-sync')();

const week_day = Number(prompt('Enter number for week day: '));

switch (week_day) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        console.log('Enter proper number for week days');
}

console.log(day);