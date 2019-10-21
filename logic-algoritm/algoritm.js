/*
Brief:

This is a logic test.

Given the following 2d matrix (this is a sample input, 
you should consider alternative inputs):

```
[[1,1,1,1],
[0,1,1,0],
[0,1,0,1],
[0,1,9,1],
[1,1,1,1]]
```

Create a virtual robot, that can walk up, right, left and bottom. 
The robot cannot leave the borders.

Find the shortest path to `9`. `1` is a walkable place. 
`0` is a hole, and you must avoid it.

Your initial position is `0x0`, the `9` position is `2x3`.

Good luck!

*/

let gridSize = 9;
let grid = [];
for (let i=0; i < gridSize; i++) {
    grid[i] = [];
    for (let j=0; j < gridSize; j++) {
        grid[i][j] = 'Empty';
    }
}

grid[0][0] = 'Start';
grid[2][3] = 'Goal';

grid[0] = 'None Walk';
grid[1] = 'Walk';

let menorCaminho = function(startCoo, grid) {
    let disTop = startCoo[0];
    let disEsq = startCoo [0];

    let location = {
        disTop: disTop,
        disEsq: disEsq,
        path: [],
        status: 'Start'
    }
};

let queue = [location];

while (queue.length > 0) {
    let currentLocation = queue.shift();
    
    let newLocation = exploreInDirection(currentLocation, 'North', grid);
    if (newLocation.status === 'Goal') {
        return newLocation.path;
    } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
    }

    let newLocation = exploreInDirection(currentLocation, 'South', grid);
    if (newLocation.status === 'Goal') {
        return newLocation.path;
    } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
    }

    let newLocation = exploreInDirection(currentLocation, 'East', grid);
    if (newLocation.status === 'Goal') {
        return newLocation.path;
    } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
    }

    let newLocation = exploreInDirection(currentLocation, 'West', grid);
    if (newLocation.status === 'Goal') {
        return newLocation.path;
    } else if (newLocation.status === 'Valid') {
        queue.push(newLocation);
    }

    return false;
};

let locationStatus = function(location, grid) {
    let gridSize = grid.length;
    let dft = location.disTop;
    let dfl = location.disEsq;

    if (location.disEsq < 0 ||
        location.disEsq >= gridSize ||
        location.disTop < 0 ||
        location.disTop >= gridSize) {
            return 'Invalid';
        } else if (drid[dft][dfl] === 'Goal') {
            return 'Goal';
        } else if (grid[dft][dfl] !== 'Empty') {
            return 'Blocked';
        } else {
            return 'Valid';
        }
};

let exploreInDirection = function(currentLocation, direction, grid) {
    let newPath = currentLocation.path.slice();
    newPath.push(direction);

    let dft = currentLocation.disTop;
    let dfl = currentLocation.disEsq;

    if (direction === 'North') {
        dft -= 1;
    } else if (direction === 'East') { 
        dfl += 1;
    } else if (direction === 'South') {
        dfl += 1; 
    } else if (direction === 'West') {
        dfl -= 1;
    }

    let newLocation = {
        disTop: dft,
        disEsq: dfl,
        path: newPath,
        status: 'Unknown'
    };
    newLocation.status = locationStatus(newLocation, grid);

    if (newLocation.status === 'Valid') {
        grid[newLocation.disTop][newLocation.disEsq] = 'Visited';
    }
    return newLocation;
};

let gridSize = 9;
let grid = [];
for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = 'Empty';
    }
}

grid[0][0] = 'Start';
grid[2][3] = 'Goal';

grid[0] = 'None Walk';

console.log(menorCaminho([0,0], grid));