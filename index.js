function GameObject (name, object, image){
    this.name = name;
    this.object = object;
    this.image = image;
}

var objectList = {
    rock: new GameObject("rockobj", "rock", "./images/rock.png"),
    paper: new GameObject("paperobj", "paper", "./images/paper.png"),
    scissors: new GameObject("scissorsobj", "scissors", "./images/scissors.png")
};

var leftSide = null;
var rightSide = null;

$("button").click(function () {
    var objectKeys = Object.keys(objectList);
    leftSide = objectList[objectKeys[Math.floor(Math.random() * objectKeys.length)]];
    rightSide = objectList[objectKeys[Math.floor(Math.random() * objectKeys.length)]];

    $(".r-result").text(rightSide.object);
    $(".l-result").text(leftSide.object);
    $(".leftIMG").attr("src", rightSide.image);
    $(".rightIMG").attr("src", leftSide.image);

    function leftWin() {
        $(".result").text("Left Win")
    }

    function rightWin() {
        $(".result").text("Right Win")
    }

    if (leftSide.object === "rock" && rightSide.object === "paper") {
        rightWin()
    } else if (leftSide.object === "rock" && rightSide.object === "scissors") {
        leftWin();
    } else if (leftSide.object === "paper" && rightSide.object === "scissors") {
        rightWin()
    } else if (leftSide.object === "paper" && rightSide.object === "rock") {
        leftWin();
    } else if (leftSide.object === "scissors" && rightSide.object === "rock") {
        rightWin()
    } else if (leftSide.object === "scissors" && rightSide.object === "paper") {
        leftWin();
    } else {
        $(".result").text("Draw")
    }
});