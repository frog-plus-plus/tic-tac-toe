const GetGridSquares = () => {
    const squares = [];
    for (let index = 0; index < 9; index++) {
        let square = document.getElementById("grid-square-" + index);
        squares[index] = square;
    }
    return squares;
};

GetGridSquares().forEach((element, index) => {
    element.onclick = () => {
        console.log(index + " was clicked!");
    };
});