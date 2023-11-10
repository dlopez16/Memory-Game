


//when user clicks the a square 
// it will save the class number of that square in memory
// then it will compare the second square to the stored square
// if true print something.



const selectElement = document.querySelector('.result');
const card = document.querySelectorAll(".parent");
let firstSquare = [];
let secondSquare = [];

//this function will compare both arrays to see if they match, if they do or not it will reset the game
function matches() {
    const firstCodition = firstSquare[0] === secondSquare[0];

    if (firstCodition === true) {
        selectElement.textContent = "Match";
        resetGame()
    } else {
        selectElement.textContent = "Try Again";
        resetGame()
    }
    firstCodition ? console.log("match!") : console.log("try again");
}


//this function will reset the arrays to start the game
function resetGame() {
    firstSquare = [];
    secondSquare = [];
    console.log("reset")
}

function boxAnimation(currentBox) {
    currentBox.classList.add("pressed");
    setTimeout(function () {
        currentBox.classList.remove("pressed");
    }, 100)
}

function flipCard(currentBox) {
    currentBox.classList.toggle("flipCard");
}
function unFlipCard() {
    card.classList.remove("flipCard")
}

document.querySelectorAll(".square").forEach(s => s.addEventListener('click', function () {


    const value = this.getAttribute('data-value');

    const attri = this.getAttribute('class');

    console.log(attri);

    boxAnimation(this);
    flipCard(this);



    //add another if to verify if (this.classList === firstSquare.classlist)
    //add another array that takes the class name
    if (firstSquare.length === 0) {
        firstSquare.push(value);
    } else {
        secondSquare.push(value);
        matches();

    }


    if (selectElement.textContent === "Match" || selectElement.textContent === "Try Again") {
        unFlipCard()
    }



    // card.forEach(e => e.addEventListener("click", flipCard));



    //maybe put ternary inside a if statement


    //analyze if firstSqaure[0] === secondSquare[0], if they do print "Matched!"
    //if not, empty the arrays and start over

    //push to firstSquare
    //if firstSquare have a value the compare to secondSquare

    // console.log(value)


    //1st render [] [] - match
    //2nd render ["red"], [] - doesn't match
    //3er render ["red"], ["red"] - match

    //if 1stSquare.length === 0 && 2ndSquare.length === 0 -  rules doesnt apply
    //if 1stSquare.length !==0, secondSquare.push(value)
    //

    // console.log(firstSquare);
    // console.log(secondSquare);


}));





// querySelectorAll returns a collection of elements that's why i have to use a loop to iterate through them