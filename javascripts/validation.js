function formValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var mgender = document.registration.msex;
    var fgender = document.registration.fsex; 
    
    if(validateUsername(uid,5,12)) {
        if(validatePassword(passid,7,12)) {
            if(allLetter(uname)) {
                if(alphanumeric(uadd)) {
                    if(cityselect(city)) {
                        if(ValidateEmail(uemail)) {
                            if(validgender(mgender,fgender)) {
                                if(validlanguage(english,nonenglish)){
                                    if(validrole(mentor, mentee)){
                                        if(ageselect(age)) {

                                        }

                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
    if (fld.value == "") {
        
        fld.style.background = 'Yellow';
        error = "You didn't enter a username.\n";
        alert(error);
        return false;
        
    } else if ((fld.value.length < 5) || (fld.value.length > 12)) {
        fld.style.background = 'Yellow';
        error = "The username should be within 5 to 12 characters.\n";
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "The username contains illegal characters.\n";
        alert(error);
        return false;
    } else {
        fld.style.background = 'White';
    }
    return true;
}

/*validate password*/
function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers
    if (fld.value == "") {
        
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);

        return false;

    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {

        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
   return true;
}

/*validate user's name*/
function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        return false;
    }
}

/*address validation*/
	function alphanumeric(uadd) {
    //var letters = /^[0-9a-zA-Z]+$/;

    if(email.indexOf("@") > 0) {
        return true;
    } else {
        alert('User address must have alphanumeric characters only');
        return false;
    }
}

/*country validation*/
function cityselect(city) {
    if(ucountry.value == "Default")
    {
        alert('Select your city from the list');
        return false;
    } else {
        return true;
    }
}

/*zip validation*/
function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    
    if(uzip.value.match(numbers))
    {
        return true;
    } else {
        alert('ZIP code must have numeric characters only');
        return false;
    }
}

/*email validation*/
function checkEmail() {
    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}

/*gender validation*/
function validgender(mgender,fgender) {
    x=0;
    if(mgender.checked) {
        x++;
    } 
    if(fgender.checked) {
    x++;
    }

    if(x==0) {
        alert('Select Male/Female');
        return false;
     } 
     if(x==2) {
        alert('Select only one please');
        return false;
    }
     /*else {
    //     alert('Form Successfully Submitted');
    //     window.location.reload()
    //     return true;
    }*/
}

function validlanguage(english, nonenglish) {
    x=0;
    if(english.checked) {
        x++;
    }
    if(nonenglish.checked) {
        x++;
    }

    if(x==0) {
        alert('Select a language!');
        return false;
    } 
    if(x ==2) {
        alert('Select only one language please!');
        return false;
    }
}

function validrole(mentor, mentee) {
    x=0;
    if(mentor.checked) {
        x++;
    }
    if(mentee.checked) {
        x++;
    }

    if(x==0) {
        alert('Select a role please!');
        return false;
    }

    if(x==2) {
        alert('Select only one role.');
        return false;
    }
}

function ageselect(age) {
    if(age.value == "Default")
    {
        alert('Select your age from the list');
        return false;
    } else {
        return true;
    }
}




