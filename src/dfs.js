/* 
DFS pseudocode:

1. If the frontier is empty then return no solution. Exit.
2. Remove a square from the frontier.
3. If the square is our endSquare we'll return the solution. Exit
4. Add the square to the explored set
5. Expand the square and add the resulting squares to the frontier only if they're not already
    there and if they haven't already been explored.

*/

class Node {
    constructor(state, parent, action) {
        this.state = state;
        this.parent = parent;
        this.action = action;
    }
}

class StackFrontier {
    constructor() {
        this.frontier = [];
    }

    push(node) {
        this.frontier.push(node);
    }

    pop(node) {
        if (this.frontier.length === 0){
            throw "Frontier is empty" 
        } else {
            return this.frontier.pop();
        }
    }

    peek() {
        return this.frontier[this.frontier.length - 1];
    }

    isEmpty() {
        return this.frontier.length === 0;
    }
}

export const findNeighbors = (row, col) => {
    const possibleSquares = {
        'up': [row - 1, col],
        'down': [row + 1, col],
        'left': [row, col - 1],
        'right': [row, col + 1]
    };
    const results = [];
    for (let i of Object.entries(possibleSquares)) {
        if (i[1][0] === -1 || i[1][1] === -1) {
            continue;
        } else if (i[1][0] === 50 || i[1][1] === 50) {
            continue;
        } else {
            results.push(i[1]);
        }
    };
    return results;
}