class Queue {
  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.data[this.tail] = item;
    this.tail += 1;
  }
  dequeue() {
    if (this.tail === this.head) return undefined;
    const item = this.data[this.head];
    delete this.data[this.head];
    this.head += 1;
    return item;
  }
}

function knightMoves(start, end) {
  if (Array.isArray(start) === false || Array.isArray(end) === false || start.length !== 2 || end.length !== 2) {
    throw new Error('Arguments are not formatted correctly');
  }
  const q = new Queue();
  q.enqueue([start]);
  function edgeFinder() {
    while (true) {
      const set = q.dequeue();
      const coord = set[set.length - 1];
      if (coord[0] + 2 <= 7) {
        if (coord[1] + 1 <= 7) {
          const newCoord = [coord[0] + 2, coord[1] + 1];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
        if (coord[1] - 1 >= 0) {
          const newCoord = [coord[0] + 2, coord[1] - 1];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
      }
      if (coord[0] - 2 >= 0) {
        if (coord[1] + 1 <= 7) {
          const newCoord = [coord[0] - 2, coord[1] + 1];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
        if (coord[1] - 1 >= 0) {
          const newCoord = [coord[0] - 2, coord[1] - 1];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
      }
      if (coord[0] + 1 <= 7) {
        if (coord[1] + 2 <= 7) {
          const newCoord = [coord[0] + 1, coord[1] + 2];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
        if (coord[1] - 2 >= 0) {
          const newCoord = [coord[0] + 1, coord[1] - 2];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
      }
      if (coord[0] - 1 >= 0) {
        if (coord[1] + 2 <= 7) {
          const newCoord = [coord[0] - 1, coord[1] + 2];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
        if (coord[1] - 2 >= 0) {
          const newCoord = [coord[0] - 1, coord[1] - 2];
          if (!set.includes(newCoord)) {
            const result = [...set, newCoord];
            if (newCoord[0] === end[0] && newCoord[1] === end[1]) {
              return result;
            } else {
              q.enqueue(result);
            }
          }
        }
      }
    }
  }

  const endResult = edgeFinder();
  console.log(`It takes the knight ${endResult.length - 1} moves to make it to ${end} from ${start}.  The line goes`);
  for (let i = 0; i < endResult.length; i++) {
    console.log(endResult[i]);
  }
  //  Breadth first search, we add/subtract randomly until we hit the answer.  The first answer we hit will always be the fastest.
  //  A funciton is needed that will add/subtract randomly (within the proper ranges +-2 and +-1 within [0-7]) and then add that to a queue.
  //  Each item in the queue will need to rememeber where it was previously.  If it repeats, do not add it back to the queue,
  // Once the end goal is found, stop the whole queue and return the array of coords.
}
knightMoves([0, 0], [2, 1]);
knightMoves([3, 5], [2, 1]);
knightMoves([7, 3], [0, 4]);
knightMoves([4, 2], [6, 6]);
knightMoves([3, 3], [4, 3]);
//
export default knightMoves;
