//Using If-Else
var age = 22
if (age>=65) {
    console.log("You get your income from pension")
} else if (age < 65 && age > 18){
    console.log("Each month you get a salary")
} else if (age < 18){
    console.log("You get an allowance")
} else {
    console.log("The value of age is not numerical")
}

//Using Switch Statement
var day = "Sunday";
switch(day){
    case "Monday":
        console.log("Do something");
        break;
        case 'Tuesday':
            console.log('Do something');
            break;
        case 'Wednesday':
            console.log('Do something');
            break;
        case 'Thursday':
            console.log('Do something');
            break;
        case 'Friday':
            console.log('Do something');
            break;
        case 'Saturday':
            console.log('Do something');
            break;
        case 'Sunday':
            console.log('Do something');
            break;
            default:
                console.log("There is no such day")

}