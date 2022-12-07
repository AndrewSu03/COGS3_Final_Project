var numofguests = prompt("How many guests do you have?");
var numoftables = prompt("How many tables do you want?");
function lowerguestspertable (guests, tables){
    var lowerpplpertable = Math.floor(guests/tables);
    return lowerpplpertable;
}
function numoftableswithonemore (guests, tables){
    var tableswithonemore = guests % tables;
    return tableswithonemore;
}
var tableswithonemore = numofguests % numoftables;
alert("Your " + numofguests + " guests will be seated as follows: " + (numoftables-numoftableswithonemore(numofguests, numoftables)) + " table(s) of " + lowerguestspertable (numofguests, numoftables) + ", and " + numoftableswithonemore(numofguests, numoftables) + " table(s) of " + (lowerguestspertable (numofguests, numoftables) + 1) + ".");

