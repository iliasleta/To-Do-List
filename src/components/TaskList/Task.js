import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function Task() {
  const value = useContext(Context);

  return (
    <li className="task">
      {value}
      <button
        type="button"
        className="taskDelete"
      >
        X
      </button>
    </li>
  );
}

export default Task;
