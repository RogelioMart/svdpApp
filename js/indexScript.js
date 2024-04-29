
function getUnP() {
    let username = document.getElementById("usName").value;
    let password = document.getElementById("pWord").value;
    // console.log("word:" + username);
    if(username === "wss" && password === "passwss") {
        window.location.replace("residentSignIn.html");
    } else if(username == "staff1" && password === "passstaff1"){
        window.location.replace("staffPage1.html");
    } else if(username == "staff2" && password === "passstaff2"){
        window.location.replace("staffPage2.html");
    } else if(username == "sec1" && password === "passsec1"){
        window.location.replace("securityPage1.html");
    } else {
        console.log("Get Out")
    }

}