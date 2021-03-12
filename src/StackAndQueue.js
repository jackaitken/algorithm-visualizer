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

    containsNode(node) {
        return node in this.frontier;
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
    const frontier = new QueueFrontier();

    frontier.add(firstNode);

    let node;
    const explored = {
        '0,0': true,
        '0,1': true,
        '0,2': true
    }

    while (!frontier.isEmpty()) {
        node = frontier.remove();

        // If current node is goal state
        if (node.state.toString() === endNode.toString()) {
            let actions = [];
            let cells = [];
            let currentNode = node;
            while (currentNode.parent != null) {
                actions.push(currentNode.action);
                cells.push(currentNode.state);
                currentNode = currentNode.parent;
            };
            actions.reverse(); 
            cells.reverse();
            return [actions, cells];
        } 
        // Mark current node as explored
        explored[node.state.toString()] = true;

        const neighbors = findNeighbors(node.state[0], node.state[1]);

        // Add neighbors to frontier
        for (const [action, state] of Object.entries(neighbors)) {
            if (!(state.toString() in explored)) {
                let child = new Node(state, node, action);
                let inFrontier = frontier.containsNode(child);
                if (!inFrontier) {
                    frontier.add(child);
                }
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
