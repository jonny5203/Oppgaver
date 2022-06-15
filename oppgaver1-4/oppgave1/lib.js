function fixText(text){
    var newsomething;
    var newText = text.trim();    
    newsomething = newText.charAt(0).toUpperCase() + newText.slice(1);


/*     const expression = /[a-zA-Z]/;
    if(expression.test(newText.charAt(0))){
        newText = capitalizeFirstLetter(newText);
    } */

    return newsomething;
}