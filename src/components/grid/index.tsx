import { useEffect, useState } from 'react';

import { useApp } from 'context';
// import Subgrid from 'components/subgrid';
import styles from './styles.module.scss';

export default function Grid() {
  const { generateSudoku, solveSudoku, isSolving } = useApp();

  const [grid, setGrid] = useState<number[][]>();
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    setGrid(generateSudoku().sudoku);
  }, []);

  const handleSolve = () => {
    if (grid) {
      const solvedGrid = solveSudoku(grid)!;
      setGrid(solvedGrid);
      setIsSolved(true);
    }
    console.log(isSolved);
  };

  const getGridClass = (i: number, j: number) => {
    if (i < 3 && j < 3) {
      return 'top-left-grid';
    } else if (i < 3 && j > 2 && j < 6) {
      return 'top-center-grid';
    } else if (i < 3 && j > 5) {
      return 'top-right-grid';
    } else if (i > 2 && i < 6 && j < 3) {
      return 'mid-left-grid';
    } else if (i > 2 && i < 6 && j > 2 && j < 6) {
      return 'mid-center-grid';
    } else if (i > 2 && i < 6 && j > 5) {
      return 'mid-right-grid';
    } else if (i > 5 && j < 3) {
      return 'bottom-left-grid';
    } else if (i > 5 && j > 2 && j < 6) {
      return 'bottom-center-grid';
    } else if (i > 5 && j > 5) {
      return 'bottom-right-grid';
    } else {
      return 'box';
    }
  };

  return (
    <div className={styles.container}>
      <table className={styles.main}>
        <tbody>
          {grid?.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={styles[getGridClass(i, j)]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isSolving ? (
        <h4>Solving.....</h4>
      ) : isSolved ? (
        <button>Get New Grid</button>
      ) : (
        <button className={styles.button} onClick={() => handleSolve()}>
          Solve
        </button>
      )}
    </div>
  );
}
