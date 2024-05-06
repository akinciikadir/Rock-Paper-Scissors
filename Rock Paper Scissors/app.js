
const resultDiv = document.querySelector(".result");


function ourChoice(ourValue) {
    X = ourValue;
    pcChoice(); 
}

function pcChoice() {
    const list = ["rock", "paper", "scissors"];
    Y = Math.floor(Math.random() * list.length);
    
    result(X,list[Y])

}

function result(x,y){

    resultDiv.innerHTML = '';

    const paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Your choice = " + x ;
    resultDiv.appendChild(paragraph1);

    const paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "PC choice = " + y ;
    resultDiv.appendChild(paragraph2);

    let message;
    if (x === "rock" && y === "paper") {
        message = "You Lose";
    } else if (x === "rock" && y === "scissors") {
        message = "You Win";
    } else if (x === "paper" && y === "rock") {
        message = "You Win";
    } else if (x === "paper" && y === "scissors") {
        message = "You Lose";
    } else if (x === "scissors" && y === "rock") {
        message = "You Lose";
    } else if (x === "scissors" && y === "paper") {
        message = "You Win";
    } else {
        message = "It's a tie";
    }

    const paragraph3 = document.createElement("p");
    paragraph3.innerHTML = message;
    resultDiv.appendChild(paragraph3);
}