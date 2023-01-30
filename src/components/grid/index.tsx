import { useEffect, useState } from 'react';

import { useApp } from 'context';
import { Input } from 'components';
import styles from './styles.module.scss';

export default function Grid() {
  const { generateSudoku, solveSudoku, grid, setGrid } = useApp();

  const [solve, setSolve] = useState<boolean>(false);
  // const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    generateSudoku();
  }, []);

  useEffect(() => {
    if (solve) {
      if (!grid) return;
      const solvedGrid = solveSudoku(grid)!;
      setGrid(solvedGrid);
      console.log(solvedGrid);
    }
  }, [solve]);

  const handleSolve = () => {
    setSolve(true);
  };

  const handleNewGrid = () => {
    generateSudoku();
    // setIsSolved(false);
  };
  //   if (i < 3 && j < 3) {
  //     return 'top-left-grid';
  //   } else if (i < 3 && j > 2 && j < 6) {
  //     return 'top-center-grid';
  //   } else if (i < 3 && j > 5) {
  //     return 'top-right-grid';
  //   } else if (i > 2 && i < 6 && j < 3) {
  //     return 'mid-left-grid';
  //   } else if (i > 2 && i < 6 && j > 2 && j < 6) {
  //     return 'mid-center-grid';
  //   } else if (i > 2 && i < 6 && j > 5) {
  //     return 'mid-right-grid';
  //   } else if (i > 5 && j < 3) {
  //     return 'bottom-left-grid';
  //   } else if (i > 5 && j > 2 && j < 6) {
  //     return 'bottom-center-grid';
  //   } else if (i > 5 && j > 5) {
  //     return 'bottom-right-grid';
  //   } else {
  //     return 'box';
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className='App'>
        <table>
          <tbody>
            {grid?.map((row, i) => (
              <tr key={i}>
                {row.map((i: number, j: number) => (
                  <td key={j}>
                    <Input i={i} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => handleNewGrid()}>Get New Grid</button>
      <button onClick={() => handleSolve()}>Solve</button>
    </div>
  );
}

// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0, 0, 0],
//   [0, 0, 7, 4, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 8, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 3, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
