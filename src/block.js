export default class Block {
  constructor(p5, type) {
    this.type = type;
    this.numRows = 4;
    this.numCols = 2;
    if (type === "I") {
      this.arrTiles = [[".", "*"], [".", "*"], [".", "*"], [".", "*"]];
    } else if (type === "J") {
      this.arrTiles = [["*", "*"], ["*", "."], ["*", "."], [".", "."]];
    } else if (type === "L") {
      this.arrTiles = [[".", "."], ["*", "."], ["*", "."], ["*", "*"]];
    } else if (type === "O") {
      this.arrTiles = [["*", "*"], ["*", "*"], [".", "."], [".", "."]];
    } else if (type === "S") {
      this.arrTiles = [["*", "."], ["*", "*"], [".", "*"], [".", "."]];
    } else if (type === "T") {
      this.arrTiles = [["*", "."], ["*", "*"], ["*", "."], [".", "."]];
    } else if (type === "Z") {
      this.arrTiles = [[".", "*"], ["*", "*"], ["*", "."], [".", "."]];
    }
    this.row = 1;
    this.col = Math.round(p5.random(1, 9));
    //this.col = 9;
  }
  draw(p5, cellWidth, cellHeight) {
    for (let j = 0; j < this.arrTiles.length; j++) {
      let line = this.arrTiles[j];
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "*") {
          p5.fill(255, 0, 0);
          p5.rect(
            (this.col + i) * cellWidth,
            (this.row + j) * cellHeight,
            cellWidth,
            cellHeight
          );
        } else {
          p5.fill(128, 128, 128);
          p5.rect(
            (this.col + i) * cellWidth,
            (this.row + j) * cellHeight,
            cellWidth,
            cellHeight
          );
        }
      }
    }
  }
  rotate() {
    let newTiles = [];
    let numCols = this.arrTiles[0].length;
    let numRows = this.arrTiles.length;
    console.log("numCols", numCols, "numRows", numRows);
    for (let j = 0; j < numCols; j++) {
      let line = [];
      for (let i = 0; i < numRows; i++) {
        console.log(j, numRows - 1 - i);
        line.push(this.arrTiles[j][numRows - 1 - i]);
        console.log(JSON.stringify(line, null, 4));
      }
      newTiles.push(line);
    }
    this.arrTiles = newTiles;
    console.log(JSON.stringify(newTiles, null, 4));
    numCols = this.arrTiles[0].length;
    numRows = this.arrTiles.length;
    // console.log("numCols", numCols, "numRows", numRows);
    console.log("-----------------");
  }
}

//
