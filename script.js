//timestamp of copy events

console.logCopy = console.log.bind(console);

console.log = function(data)
{
    var currentDate = '[' + new Date().toUTCString() + '] ';
    this.logCopy(currentDate, data);
};


document.getElementById("copytext1").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("The caller is an admin who wants to know about");
}

document.getElementById("copytext2").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("The caller is a teacher who wants to know about");
}

document.getElementById("copytext3").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("The caller needs help with password");
}

document.getElementById("copytext4").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("User ID = > Emulate > Admin >");
}

document.getElementById("copytext5").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("User ID = > Emulate");
}

document.getElementById("copytext6").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("User ID = > Invalid Credentials");
}

document.getElementById("copytext7").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("tadpoles > user: > account: >");
}

document.getElementById("copytext8").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("It was a pleasure speaking with you");
}

document.getElementById("copytext9").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("I'm sorry about the experience with");
}

document.getElementById("copytext10").onclick = function() {
    this.select();
    document.execCommand('copy');
    console.log("If you would like further information on what we discussed, please see the following articles:");
}
