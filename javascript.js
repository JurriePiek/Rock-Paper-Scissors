begin = false;
userscore = 0;
computerscore = 0;

function start() {
    begin = true;
    console.log("start");
    document.getElementById("l1").innerHTML = "  - Game Started";
    changebutton()
}

function rock() {
    if (begin == true) {
        console.log("player: 0");
        input = "0";
        computer();
        convert();
        document.getElementById("l2").innerHTML = "  - You chose: Rock";
        document.getElementById("l4").innerHTML = "  - Computer chose: " + pcinput;
        wonorlost()
        
    } else {
        console.log("Not yet started")
        document.getElementById("l1").innerHTML = "  - Click Start to begin";

    }
}

function paper() {
    if (begin == true) {
        console.log("player: 1");
        input = "1";
        computer();
        convert()
        document.getElementById("l2").innerHTML = "  - You chose: Paper";
        document.getElementById("l4").innerHTML = "  - Computer chose: " + pcinput;
        wonorlost();

    } else {
        console.log("Not yet started")
        document.getElementById("l1").innerHTML = "  - Click Start to begin";
    }
}

function scissors() {
    if (begin == true) {
        console.log("player: 2");
        input = "2";
        computer();
        convert();
        document.getElementById("l2").innerHTML = "  - You chose: Scissors";
        document.getElementById("l4").innerHTML = "  - Computer chose: " + pcinput;
        wonorlost();
   

    } else {
        console.log("Not yet started")
        document.getElementById("l1").innerHTML = "  - Click Start to begin";
    }
}

function computer() {
    computerinput = Math.floor(Math.random() * 3);
    console.log("Computer: " + computerinput)

}
function convert() {
    
    if (computerinput == 0) {
        pcinput = "Rock";
    }
     if (computerinput == 1) {
        pcinput = "Paper";
    }
     if (computerinput == 2) {
        pcinput = "Scissors";
    }
    
    
    
}

function wonorlost() {
    
    if (input == computerinput) {
        console.log("Tie")
        document.getElementById("l5").innerHTML = " - It's a tie!";
        
    }
    else if (input == 0 && computerinput == 1) {
        console.log("Lost")
        document.getElementById("l5").innerHTML = " - You lost";
        computerpoint()
    }
    else if (input == 1 && computerinput == 0) {
        console.log("Won")
        document.getElementById("l5").innerHTML = " - You won!";
        userpoint()
    }
    
    else if (input == 2 && computerinput == 0) {
        console.log("Lost")
        document.getElementById("l5").innerHTML = " - You lost";
        computerpoint()
    }
    else if (input == 0 && computerinput == 2) {
        console.log("Won")
        document.getElementById("l5").innerHTML = " - You won!";
        userpoint()
    }
    else if (input == 1 && computerinput == 2) {
        console.log("Lost")
        document.getElementById("l5").innerHTML = " - You lost";
        computerpoint()
    }
    else if (input == 2 && computerinput == 1) {
        console.log("Won")
        document.getElementById("l5").innerHTML = " - You won!";
        userpoint()
    }
}
//user 
function userpoint() {
    userscore++;
    document.getElementById("user").innerHTML = userscore;
    console.log(userscore)
    
}
//computer + 1 punt
function computerpoint() {
    computerscore++;
    document.getElementById("computer").innerHTML = computerscore;
    console.log(computerscore)
    
}
//verandert de button van start naar reset
function changebutton() {
    document.getElementById("startbtn").style.display = "none";
    document.getElementById("resetbtn").style.display = "block";
}
//Reset de score
function reset() {
    document.getElementById("user").innerHTML = "0";
    document.getElementById("computer").innerHTML = "0";
    document.getElementById("startbtn").style.display = "block";
    document.getElementById("resetbtn").style.display = "none";
    document.getElementById("l1").innerHTML = null;
    document.getElementById("l2").innerHTML = null;
    document.getElementById("l3").innerHTML = null;
    document.getElementById("l4").innerHTML = null;
    document.getElementById("l5").innerHTML = null;
    begin = false;
    computerscore = 0;
    userscore = 0;
    
}
 
