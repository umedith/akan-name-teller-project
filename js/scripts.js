function giveAkanName(){

var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var thousand = document.getElementById("thous").value;
var hundred = document.getElementById("hund").value;
var tens = document.getElementById("ten").value;
var ones= document.getElementById("one").value;

if (day < 1 || day> 31) {
    if (month<1 || month >12){
        alert("the day and month are invalid");
    }else{
        alert("the day is invalid!!");
    }

}else {
    if (month<1 || month>12){
        alert('the month is invalid!!');
    }
}

var century= thousand +''+hundred;
var decade = tens+''+ones;
var birthDate = (((century/4) -2*century-1) + ((5*decade/4) ) + ((26*(month+1)/10)) + day ) % 7;
document.write(birthDate);
}

giveAkanName();




// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
// var getAkanName = function(bithDate,gender) {
//     return  (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
// };
