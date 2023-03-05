import './styles.scss';

function Task({ task }) {
  // const value = useContext(Context);

  return (
    <li className="task">
      {task}
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
