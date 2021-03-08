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
        if (this.frontier.length == 0){
            throw "Frontier is empty" 
        } else {
            return this.frontier.pop();
        }
    }

    peek() {
        return this.frontier[this.frontier.length - 1];
    }

    isEmpty() {
        return this.frontier.length == 0;
    }
}

