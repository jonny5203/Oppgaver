function checkAt(email){
    return email.includes('@'); //returns a boolean (true or false)
}

function ifWhiteSpace(email){
    return email.includes(' '); //returns a boolean (true or false)
}

function checkPeriodAfterAt(email){
    return email.indexOf('@') > email.indexOf('.');  //returns a boolean (true or false)
}

function checkEmail(email){
    return email.includes('@') && email.includes(' ') && email.indexOf('@') > email.indexOf('.')
}