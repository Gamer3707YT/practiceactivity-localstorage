function Back() {
    window.location.replace("activity_1.html");
}

function FetchScore() {
    score = localStorage.getItem("score");

    document.getElementById("scoreviewer").innerHTML = "<h3>Score : " + score + "</h3>"; 
}