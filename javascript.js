const INDEX = 3.281;
function ftToMeter(num){
    return (num * INDEX);
}
function meterToFt(num){
    return (num / INDEX);
}

let feet = +(prompt("Enter number in feet (ft)"));
let meter = +(prompt("Enter number in meter (m)"));
document.getElementById("feetToMeter").innerHTML = feet + " feet to meter: " + meterToFt(feet);
document.getElementById("meterToFeet").innerHTML = meter + " meter to feet: " + ftToMeter(meter);

