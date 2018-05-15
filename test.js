var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`;

//This function checks for the email
function emailCheck(data) {
    var pattern = /[a-z.]+\.[a-z]+@[a-z]+\.\w+./g;
    var check = text.match(pattern);
    return check;
}
emailCheck(text);

//This function checks for the number
function numCheck(data) {
    var pattern = /.(234)[-]\d{10}/g;
    var check = text.match(pattern);
    return check;
}
numCheck(text);

//This function checks for the name
function nameCheck(data) {
    var pattern = /[a-zA-Z]+\s\w*/g;
    var check = text.match(pattern);
    return check;
}
nameCheck(text);

console.log(emailCheck(text));
console.log(numCheck(text));
console.log(nameCheck(text));