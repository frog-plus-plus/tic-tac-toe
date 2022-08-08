const GetGridSquares = () => {
    const squares = [];
    for (let index = 0; index < 9; index++) {
        let square = document.getElementById("grid-square-" + index);
        squares[index] = square;
    }
    return squares;
};

GetGridSquares().forEach((element) => {
    element.onclick = () => {
        // When clicked, turn red for 3 seconds and then turn back to the previous colour.
        let previousColour = element.style.backgroundColor;
        element.style.backgroundColor = "red";
        setTimeout(() => { element.style.backgroundColor = previousColour; }, 3000);
    };
});