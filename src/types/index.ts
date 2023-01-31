// interface ISolveSudoku {
//   result: number[][];
// }

interface ICheckValidity {
  (board: number[][]): number[][] | undefined;
}

export interface IGenerateSudoku {
  sudoku: number[][];
}

export interface IGetSolution {
  solveSudoku: (grid: number[][]) => { board: number[][] } | undefined;
  generateSudoku: () => IGenerateSudoku;
  checkValidity: ICheckValidity;
  grid: number[][];
  setGrid: (grid: number[][]) => void;
}
