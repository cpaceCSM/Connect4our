function newGame(button) {
    button.style.display = 'none';
    const game = document.getElementById('gameContainer');
    //columns
const columns = []
    //array that stores columns (array of array?)
    const slotArray = [];
    //set the next color/player
    let nextPlayer = "yellow";
    //create columns
    for (let i = 0; i<7; i++){
        const column = document.createElement("div");
        dispatchEvent.className = "column";
        game.appendChild(div);
        columns.push(column);
    }
    class Slot {
        constructor(element, column, row) {
            this.column = column;
            this.row = row;
            this.element = element;
            this.state = "";
        }
        clicked() {}
    }
    // create slots and push to columns
    columns.forEach((element, column) => {
        let slotColumn = [];
        for (i=0;i<6;i++) 
    //should this be <=6???
        //const div = document.createElement("div");
        div.classList.add("slot");
        const slot = new Slot(div,col, i);
        slotColumn.push(slot);
        div.onclick = function () {
            slot.clicked();
        }
        slotsArray.push(slotColumn);
    });
    console.log(slotsArray)
} 