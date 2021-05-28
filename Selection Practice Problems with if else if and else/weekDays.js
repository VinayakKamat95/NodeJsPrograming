const prompt = require('prompt-sync')();

const Monday = 1
const Tuesday = 2
const Wednesday = 3
const Thursday = 4
const Friday = 5
const Saturday = 6
const Sunday = 7


const week_day = Number(prompt('Enter number for week day: '));

if (week_day == Monday) {
    console.log('Monday');
}
else if (week_day == Tuesday) {
    console.log('Tuesday');
}
else if (week_day == Wednesday) {
    console.log('Wednesday');
}
else if (week_day == Thursday) {
    console.log('Thursday');
}
else if (week_day == Friday) {
    console.log('Friday');
}
else if (week_day == Saturday) {
    console.log('Saturday');
}
else if (week_day == Sunday) {
    console.log('Sunday');
}
else {
    console.log('Enter proper number for week days');
}
