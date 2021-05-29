const prompt = require('prompt-sync')();

const units = Number(prompt('Enter number for display units: '));

switch (units) {
    case 1:
        unit = "unit";
        break;
    case 10:
        unit = "ten";
        break;
    case 100:
        unit = "hundred";
        break;
    case 1000:
        unit = "thousand";
        break;
    case 10000:
        unit = "tenThousand";
        break;
    case 100000:
        unit = "lakh";
        break;
    default:
        console.log('Enter Proper number to display units');
}

console.log(unit);
