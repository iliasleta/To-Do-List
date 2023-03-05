import PropTypes from 'prop-types';
import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function Task({ task, id }) {
  const { setTasks } = useContext(Context);
  return (
    <li className="task">
      {task}
      <button
        type="button"
        className="taskDelete"
        onClick={() => {
          const localTasks = JSON.parse(localStorage.getItem('tasks'));
          const filteredTasks = localTasks.filter((taskToKeep) => taskToKeep.id !== id);
          localStorage.setItem('tasks', JSON.stringify(filteredTasks));
          setTasks(filteredTasks);
        }}
      >
        X
      </button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Task;
