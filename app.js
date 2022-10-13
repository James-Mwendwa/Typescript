var message = 'Hello World';
console.log(message);
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
//object type
var employee;
employee = {
    name: 'James',
    age: 25,
    jobTitle: 'SWE'
};
//storing mixed type
var scores = [5, 'Design'];
console.log(scores);
// Tuple type
// number of elements in tuple is fixed
// Order is very important
var skill;
skill = ['design', 5,];
console.log(skill);
// enum
// group of named constants
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
    }
    return isSummer;
}
console.log(isItSummer(6));
// void
// return type of functions that do not return any value
// Type union
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(b);
    throw new Error('parameters must be numbers or strings');
}
console.log(add('hello', 6));
