console.log("hello resident");

function signInRes() {
    let resName = document.getElementById("resUser").value;
    let bedNum = document.getElementById("resBed").value;
    let reason = document.getElementById("reason").value;

    var audio1 = new Audio('assets/approved.mp3');
    var audio2 = new Audio('assets/wrong.mp3');

    if(resName === "res1" && (bedNum === "A1" || bedNum === "a1") && (reason !== "")) {
        audio1.play();
        console.log('holi');
    }
    else {
        console.log("YOU SHALL NOT PASS");
        audio2.play();
    }
}