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

class QueueFrontier extends StackFrontier {
    constructor () {
        super()
    }

    remove(node) {
        if (this.frontier.length === 0) {
            throw "Frontier is empty"
        } else {
            return this.frontier.shift();
        }
    }
}

export const solve = (start, end) => {
    const firstNode = new Node(start, null, null);
    const endNode = end;
    const frontier = new StackFrontier();
    let node;
    const explored = {};
    const frontierStates = {};

    // Add our start node into the frontier and mark it as seen
    frontier.add(firstNode);
    frontierStates[firstNode.state.toString()] = true;

    // Enter main function loop
    while (!frontier.isEmpty()) {
        node = frontier.remove();

        // Check if current node is the goal state
        if (node.state.toString() === endNode.toString()) {
            let actions = [];
            let cells = [];
            while (node.parent != null) {
                actions.push(node.action);
                cells.push(node.state);
                node = node.parent;
            };
            actions.reverse(); 
            cells.reverse();
            cells.pop() // Remove last cell which is the end node
            return cells;
        } 
        // Mark current node as explored
        explored[node.state.toString()] = true;

        const neighbors = findNeighbors(node.state[0], node.state[1]);

        // Add neighbor if it hasn't been explored
        for (const [action, state] of Object.entries(neighbors)) {
            if (!(state.toString() in explored)) {
                // If using a Queue, check that it's not in frontier
                if (frontier.constructor.name == 'QueueFrontier') {
                    if (state.toString() in frontierStates) {
                        continue
                    }
                }
                let child = new Node(state, node, action);
                frontierStates[child.state.toString()] = true;
                frontier.add(child);
            };
        };
    };
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
