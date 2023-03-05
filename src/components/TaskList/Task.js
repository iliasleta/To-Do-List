import './styles.scss';

function Task() {
  return (
    <li className="task">
      Task #?
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
