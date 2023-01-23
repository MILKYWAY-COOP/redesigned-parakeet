import { useState } from 'react';

import { IGetSolution, IGenerateSudoku } from 'types';

export const GetSolution = (): IGetSolution => {
  const [isSolving, setIsSolving] = useState(false);

  function solveSudoku(board: number[][]): number[][] | undefined {
    setIsSolving(true);
    //Find an empty cell
    let emptyCell = findEmptyCell(board);
    if (!emptyCell) {
      return board;
    }
    let [row, col] = emptyCell;
    //Try filling the empty cell with a numbers 1-9
    for (let num = 1; num <= 9; num++) {
      //Check if the number is valid
      if (isValid(board, row, col, num)) {
        //If valid, fill the cell with the number
        board[row][col] = num;
        //Recursively call solveSudoku
        if (solveSudoku(board)) {
          return board;
        }
        //If the number is not valid, reset the cell to 0
        board[row][col] = 0;
      }
    }
    setIsSolving(false);
  }

  function checkValidity(board: number[][]): number[][] | undefined {
    let newBoard = createEmptyBoard();
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (!isValid(board, row, col, board[row][col])) {
          newBoard[row][col] = -1;
        }
      }
    }
    if (findEmptySpace(newBoard)) {
      return newBoard;
    }
    return board;
  }

  function createEmptyBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push(new Array(9).fill(0));
    }
    return board;
  }

  function findEmptySpace(board: number[][]): boolean {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0) {
          return true;
        }
      }
    }
    return false;
  }

  function findEmptyCell(board: number[][]): number[] | undefined {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0) {
          return [row, col];
        }
      }
    }
  }

  function isValid(
    board: number[][],
    row: number,
    col: number,
    num: number
  ): boolean {
    //Check if the number is already in the row
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }
    //Check if the number is already in the column
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }
    //Check if the number is already in the 3x3 square
    let squareRow = Math.floor(row / 3) * 3;
    let squareCol = Math.floor(col / 3) * 3;
    for (let i = squareRow; i < squareRow + 3; i++) {
      for (let j = squareCol; j < squareCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  function generateSudoku(): IGenerateSudoku {
    let sudoku: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));
    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 9; i++) {
      numbers = shuffle(numbers);
      for (let j = 0; j < 9; j++) {
        sudoku[i][j] = numbers[j];
      }
    }

    // shuffle rows and columns
    for (let i = 0; i < 9; i++) {
      sudoku[i] = shuffle(sudoku[i]);
    }

    // empty some cells randomly
    let emptyCells: number = Math.floor(Math.random() * (80 - 60 + 1)) + 60;
    while (emptyCells > 0) {
      let x: number = Math.floor(Math.random() * 9);
      let y: number = Math.floor(Math.random() * 9);
      if (sudoku[x][y] !== 0) {
        sudoku[x][y] = 0;
        emptyCells--;
      }
    }
    return { sudoku };
  }

  //helper function to shuffle an array
  function shuffle(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return {
    solveSudoku,
    generateSudoku,
    checkValidity,
    isSolving,
    setIsSolving,
  };
};
