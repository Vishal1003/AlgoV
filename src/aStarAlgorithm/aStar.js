// PATH FINDING ALGORITHM

function Astar(startNode, endNode) {

    // path to visit
    let openSet = [];
    // path already visited
    let closedSet = [];
    // shortest path track
    let path = [];

    let visitedNodes = [];

    openSet.push(startNode);

    while (openSet.length > 0) {
        let leastIndex = 0;

        // checking cost val
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[leastIndex].f) {
                leastIndex = i;
            }
        }

        let current = openSet[leastIndex];
        visitedNodes.push(current);
        if (current === endNode) {
            let temp = current;
            path.push(temp);
            while (temp.prev) {
                path.push(temp.prev);
                temp = temp.prev;
            }

            // console.log(path);
            return {path, visitedNodes};
        }

        openSet = openSet.filter(ele => ele !== current);
        closedSet.push(current);

        let neighbors = current.nbrs;
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!closedSet.includes(neighbor) && !neighbor.isWall) {
                let tempG = current.g + 1;
                let newPath = false;
                if (openSet.includes(neighbor)) {
                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                        newPath = true;
                    }
                }
                else {
                    neighbor.g = tempG;
                    newPath = true;
                    openSet.push(neighbor);
                }


                if (newPath) {
                    neighbor.h = heruistic(neighbor, endNode);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.prev = current;
                }
            }
        }

    }

    return {path, visitedNodes, error : "No Path found!"}

}


function heruistic(a, b) {
    return Math.abs(a.x - a.y) + Math.abs(b.x - b.y);
}

export default Astar;