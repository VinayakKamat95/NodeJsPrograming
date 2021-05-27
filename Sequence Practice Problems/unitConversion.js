
//1feet=12inch

const inch = 42;

let foot = inch / 12;

console.log(foot);

//1feet=0.305meter

const L_feet = 60;

const H_feet = 40;

let L_meter = L_feet * 0.305;

console.log(L_meter);

let H_meter = H_feet * 0.305;

console.log(H_meter);

let rectangle_area_meter = L_meter * H_meter;

console.log(`Area of rectangle in meter^2 : ${rectangle_area_meter}`);

//1acre=4046.86meter^2

let rectangle_area_acres = rectangle_area_meter / 4046.86;

console.log(`Area of rectangle in acres : ${rectangle_area_acres}`);

//Area of such 25 plots in acres

let total_area_acres = rectangle_area_acres * 25;

console.log(`Total Area of 25 plots in acres : ${total_area_acres}`);

