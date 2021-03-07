/* 
DFS pseudocode:

Let's use a frontier. We'll add the start node to the frontier first and start 
with an empty set, then we'll do the following:

1. If the frontier is empty then return no solution. Exit.
2. Remove a square from the frontier.
3. If the square is our endSquare we'll return the solution. Exit
4. Add the square to the explored set
5. Expand the square and add the resulting squares to the frontier only if they're not already
    there and if they haven't already been explored.

*/