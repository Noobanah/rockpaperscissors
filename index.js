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

var leftScores = 0;
var rightScores = 0;

$("button").click(function () {
    var objectKeys = Object.keys(objectList);
    leftSide = objectList[objectKeys[Math.floor(Math.random() * objectKeys.length)]];
    rightSide = objectList[objectKeys[Math.floor(Math.random() * objectKeys.length)]];

    $(".r-result").text(rightSide.object);
    $(".l-result").text(leftSide.object);
    $(".leftIMG").attr("src", leftSide.image);
    $(".rightIMG").attr("src", rightSide.image);

    function leftWin() {
        $(".result").text("Left Win");
        leftScores++;
        $(".leftScore").text("score = " + leftScores);
    }

    function rightWin() {
        $(".result").text("Right Win");
        rightScores++;
        $(".rightScore").text("score = " + rightScores);
    }

    if (leftSide.object === "rock" && rightSide.object === "paper") {
        rightWin();
    } else if (leftSide.object === "rock" && rightSide.object === "scissors") {
        leftWin();
    } else if (leftSide.object === "paper" && rightSide.object === "scissors") {
        rightWin();
    } else if (leftSide.object === "paper" && rightSide.object === "rock") {
        leftWin();
    } else if (leftSide.object === "scissors" && rightSide.object === "rock") {
        rightWin();
    } else if (leftSide.object === "scissors" && rightSide.object === "paper") {
        leftWin();
    } else {
        $(".result").text("Draw");
    }
});
