import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function AddTaskButton() {
  const { addTask, setAddTask } = useContext(Context);
  console.log(setAddTask);
  return (
    <button
      type="button"
      className="addTask"
      onClick={() => {
        setAddTask(!addTask);
      }}
    >
      +
    </button>
  );
}

export default AddTaskButton;
