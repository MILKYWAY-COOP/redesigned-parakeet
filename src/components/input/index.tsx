import { useState } from 'react';
import classNames from 'classnames';

import styles from './input.module.scss';

interface IProps {
  i: number;
}

export default function Input(Props: IProps) {
  const { i } = Props;
  const [value, setValue] = useState<string>('');
  let isChangeable = false;
  let readOnly = true;

  if (i === 0) {
    isChangeable = true;
    readOnly = false;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  i.toString();

  return (
    <div className={styles.main}>
      <input
        type='text'
        value={isChangeable ? value : i}
        onChange={isChangeable ? handleChange : undefined}
        readOnly={readOnly}
        className={classNames({
          [styles.changeable]: isChangeable,
        })}
      />
    </div>
  );
}
