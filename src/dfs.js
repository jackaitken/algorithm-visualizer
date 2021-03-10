/* 
DFS pseudocode:

1. If the frontier is empty then return no solution. Exit.
2. Remove a square from the frontier.
3. If the square is our endSquare we'll return the solution. Exit
4. Add the square to the explored set
5. Expand the square and add the resulting squares to the frontier only if they're not already
    there and if they haven't already been explored.

*/

import { act } from "react-dom/test-utils";

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

    add(node) {
        this.frontier.push(node);
    }

    remove(node) {
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

const solve = (start, end) => {
    const firstNode = new Node(start, null, null);
    const endNode = end;
    const frontier = new StackFrontier();

    frontier.add(firstNode);

    const explored = new Set();
    explored.add([0, 1], [1, 0], [2, 1], [1, 2]);

    while (!frontier.isEmpty()) {
        let node = frontier.remove()

        // If current node is goal state
        if (frontier.state === endNode) {
            console.log('Goal State')
            const actions = [];
            const cells = [];
            while (node.parent != null) {
                actions.push(node.action);
                cells.push(node.state);
                let node = node.parent;
            actions.reverse(); 
            cells.reverse();
            return [actions, cells];
            };
        } 
        // Mark current node as explored
        explored.add(node);
        const neighbors = findNeighbors(node.state[0], node.state[1]);

        // Add neighbors to frontier
        for (const [action, state] of Object.entries(neighbors)) {
            return explored.size;
            if (!(state in explored)) {
                let child = new Node(state, node, action);
                frontier.add(child);
            };
        };
        return frontier;
    };
    return;
};

export const findNeighbors = (row, col) => {
    const possibleSquares = {
        'up': [row - 1, col],
        'down': [row + 1, col],
        'left': [row, col - 1],
        'right': [row, col + 1]
    };

    const results = {};
    for (let i of Object.entries(possibleSquares)) {
        if (i[1][0] === -1 || i[1][1] === -1) {
            continue;
        } else if (i[1][0] === 50 || i[1][1] === 50) {
            continue;
        } else {
            results[i[0]] = i[1];
        }
    };
    return results;
}

const test = solve([1, 1], [5, 5]);
console.log(test);