var text = "Testing";
var testVariable = "testVariable=" + text;

var xmlhttp = new XMLHttpRequest();
function sendVariable() {
    xmlhttp.open("GET", "receiveVariable.php?" + testVariable, true);
    xmlhttp.send()
}