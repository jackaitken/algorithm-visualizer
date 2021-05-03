export let getRowCol = i => {
    let row = Math.floor(i / 50);

    if (i < 50) {
        let col = i;
        return [row, col];
    } else {
        let counter = 0;
        while (counter + 50 <= i) {
            counter += 50
        }
        if (counter === i) {
            let col = 0;
            return [row, col];
        } else {
            let col = (i - counter);
            return [row, col];
        }
    }
} 

export let getCellFromRowCol = (row, col) => {
    return (row * 50) + col;
}

export let convertExploredObject = exploredNodes => {
    let sortedObject = Object.keys(exploredNodes);
    let exploredNodesArray = [];
    for (let cells of sortedObject) {
        console.log(cells);
        let convertedCell = getCellFromRowCol(cells[0], cells[1])
        exploredNodesArray.push(convertedCell);
    }
}