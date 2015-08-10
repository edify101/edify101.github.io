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

        error = "The username is the wrong length.\n";

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
