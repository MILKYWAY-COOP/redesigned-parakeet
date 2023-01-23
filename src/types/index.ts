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
  generateSudoku: () => IGenerateSudoku;
  checkValidity: ICheckValidity;
  isSolving: boolean;
  setIsSolving: (isSolving: boolean) => void;
}
