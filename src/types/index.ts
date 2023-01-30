interface solveSudoku {
  (board: number[][]): void;
}

interface ICheckValidity {
  (board: number[][]): number[][] | undefined;
}

export interface IGenerateSudoku {
  sudoku: number[][];
}

export interface IGetSolution {
  solveSudoku: solveSudoku;
  generateSudoku: void;
  checkValidity: ICheckValidity;
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>;
}
