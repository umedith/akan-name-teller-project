
function giveAkanName(){

var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var thousand = document.getElementById("thous").value;
var hundred = document.getElementById("hund").value;
var tens = document.getElementById("ten").value;
var ones= document.getElementById("one").value;
var gender =  document.getElementById("gender").value;


if (day < 1 || day> 31) {
    if (month<1 || month >12){
        alert("the day and month are invalid!!!!");
        
    }else{
        alert("the day is invalid!!!!");
       
    }

}else {
    if (month<1 || month>12){
        alert('the month is invalid!!!!');
        
       }
}


var century= thousand +''+hundred;
var decade = tens+''+ones;
var birthDate = (((century/4) -2*century-1) + ((5*decade/4) ) + ((26*(month+1)/10)) + day ) % 7;
var rounded = Math.trunc(birthDate);



if (rounded == 1 ){
    document.write("you were born on monday and ");
      
}else if(rounded == 2){
    document.write("you were born on tuesday and ");
  
}else if(rounded == 3){
    document.write("you were born on wednesday and ");
}else if(rounded == 4){
    document.write("you were born on thursday and ");
}else if(rounded == 5){
    document.write("you were born on friday and ");
} else if(rounded == 6){
    document.write("you were born on saturday and ");
}else if(rounded == 7){
    document.write("you were born on sunday and ");
}else{
    document.write("invalid day");
}


var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


if(gender == "female"){
    
    switch(rounded){
        case 1:
            document.write("your Akan name is : " + femaleNames[0]) ;
            break;
        case 2:
            document.write("your Akan name is : " + femaleNames[1]) ;
            break;
        case 3:
            document.write("your Akan name is : " + femaleNames[2]) ;
            break;
        case 4:
            document.write("your Akan name is : " + femaleNames[3]) ;
            break;
        case 5:
            document.write("your Akan name is : " + femaleNames[4]) ;
            break;
        case 6:
            document.write("your Akan name is : " + femaleNames[5]) ;
            break;
        case 7:
            document.write("your Akan name is : " + femaleNames[6]) ;
            break;
        default:
            document.write("unknown akan name ");
    }

}else if(gender == "male"){

    switch(rounded){
        case 1:
            document.write("your Akan name is : " + maleNames[0]) ;
            break;
        case 2:
            document.write("your Akan name is : " + maleNames[1]) ;
            break;
        case 3:
            document.write("your Akan name is : " + maleNames[2]) ;
            break;
        case 4:
            document.write("your Akan name is : " + maleNames[3]) ;
            break;
        case 5:
            document.write("your Akan name is : " + maleNames[4]) ;
            break;
        case 6:
            document.write("your Akan name is : " + maleNames[5]) ;
            break;
        case 7:
            document.write("your Akan name is : " + maleNames[6]) ;
            break;
        default:
            document.write("unknown akan name ");
    }


}else{
    document.write("no such gender");
}




}

giveAkanName();

