function generate(){
    let confirm = document.getElementById("main-result").innerHTML;
    if(confirm == "You lost"){
        alert("Game Over! Please restart again")
    }

    else{
    let x;
    do{
        x = Math.floor(Math.random() * 100 / 7.6);
    }
    while(x == 0)

    let currentTotal = document.getElementById("result").innerHTML;
    let total = parseInt(currentTotal) + x;
    document.getElementById("result").innerHTML = total;

    if(total < 21)
    {
        document.getElementById("main-result").innerHTML = "Generate Another Card"
    }

    else if(total == 21){
        document.getElementById("main-result").innerHTML = "You won!"
        alert("Congratulation 🥳🥳");
        document.getElementById("button-restart").style.display = "inline-block";
        

    }

    else if(total > 21){
        document.getElementById("main-result").innerHTML = "You lost";
        alert("Lost 😥😥. Click restart to play again.");
        document.getElementById("button-restart").style.display = "inline-block"


    }
    var img = document.createElement("img")
    img.src = "images/" + x + ".png";
    img.height = 280;
   
    document.body.appendChild(img);
}


     
}

function restart(){
    location.reload();
}