var text = "Testing";
var testVariable = "testVariable=" + text;

function sendVariable() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    console.log(this.responseText);
	}
    }
    xmlhttp.open("POST", "receiveVariable.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("testVariable=testing");
}
