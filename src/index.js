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
  // each coord is an array.  No number should exceed the range 0-7
  // Return value is an array of arrays showing the path taken.
  function boardGen() {
    class Square {
      constructor(coord) {
        this.value = coord;
        this.edges = this.edgeFinder(coord);
      }
      edgeFinder(coord) {
        const edges = [];
        // this is just to collapse the function
        // eslint-disable-next-line
        if (true) {
          if (coord[0] + 2 <= 7) {
            if (coord[1] + 1 <= 7) {
              edges.push([coord[0] + 2, coord[1] + 1]);
            }
            if (coord[1] - 1 >= 0) {
              edges.push([coord[0] + 2, coord[1] - 1]);
            }
          }
          if (coord[0] - 2 >= 0) {
            if (coord[1] + 1 <= 7) {
              edges.push([coord[0] - 2, coord[1] + 1]);
            }
            if (coord[1] - 1 >= 0) {
              edges.push([coord[0] - 2, coord[1] - 1]);
            }
          }
          if (coord[0] + 1 <= 7) {
            if (coord[1] + 2 <= 7) {
              edges.push([coord[0] + 1, coord[1] + 2]);
            }
            if (coord[1] - 2 >= 0) {
              edges.push([coord[0] + 1, coord[1] - 2]);
            }
          }
          if (coord[0] - 1 >= 0) {
            if (coord[1] + 2 <= 7) {
              edges.push([coord[0] - 1, coord[1] + 2]);
            }
            if (coord[1] - 2 >= 0) {
              edges.push([coord[0] - 1, coord[1] - 2]);
            }
          }
        }
        return edges;
      }
    }
    // const board = [];
    // for (let i = 0; i < 8; i++) {
    //   for (let j = 0; j < 8; j++) {
    //     board.push(new Square([i, j]));
    //   }
    // // }
    // console.log(board);
    // console.log(board.length);
    const q = new Queue();
  }
  boardGen();

  //  Breadth first search, we add/subtract randomly until we hit the answer.  The first answer we hit will always be the fastest.
  //  A funciton is needed that will add/subtract randomly (within the proper ranges +-2 and +-1 within [0-7]) and then add that to a queue.
  //  Each item in the queue will need to rememeber where it was previously.  If it repeats, do not add it back to the queue,
  // Once the end goal is found, stop the whole queue and return the array of coords.
}
knightMoves([0, 0], [2, 1]);
//
export default knightMoves;
