export const getRowCol = (i) => {
    const row = Math.floor(i / 50);

    if (i < 50) {
        const col = i;
        return [row, col];
    } else {
        let counter = 0;
        while (counter + 50 <= i) {
            counter += 50
        }
        if (counter === i) {
            const col = 0;
            return [row, col];
        } else {
            const col = (i - counter);
            return [row, col];
        }
    }
} 

export const getCellFromRowCol = (row, col) => {
    return (row * 50) + col;
}
