function isValidSudoku(board) {
    // Check rows
    for (let row = 0; row < 9; row++) {
      const rowSet = new Set(); //declaring empty set
     
      for (let col = 0; col < 9; col++) {
        const num = board[row][col];
        
        if (num !== '.') {
          if (rowSet.has(num)) {
            return false; // Duplicate number in row
          }
          rowSet.add(num);
        }
      }
    }
  
    // Check columns
    for (let col = 0; col < 9; col++) {
      const colSet = new Set();
      for (let row = 0; row < 9; row++) {
        const num = board[row][col];
        if (num !== '.') {
          if (colSet.has(num)) {
            return false; // Duplicate num in column
          }
          colSet.add(num);
        }
      }
    }
  
    // Check 3x3 sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        const boxSet = new Set();
        for (let row = boxRow * 3; row < (boxRow + 1) * 3; row++) {
          for (let col = boxCol * 3; col < (boxCol + 1) * 3; col++) {
            const num = board[row][col];
            console.log(num)
            if (num !== '.') {
              if (boxSet.has(num)) {
                return false; // Duplicate num in sub-box
              }
              boxSet.add(num);
            }
          }
        }
      }
    }
  
    return true; // Valid Sudoku board

  }
  

  const board = [
    ["5","3",".",".","5",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  
  console.log(isValidSudoku(board)); // Output: true