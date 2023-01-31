import { useApp } from 'context';
import { Input } from 'components';
import styles from './styles.module.scss';

export default function Grid() {
  const { generateSudoku, solveSudoku, grid, setGrid } = useApp();

  const handleNewGrid = () => {
    const { sudoku } = generateSudoku();
    // setGrid((prev) => (prev = sudoku));
    setGrid(sudoku);
  };

  const handleSolve = () => {
    const { board } = solveSudoku(grid)!;
    console.log(board);
    setGrid(board);
  };

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
