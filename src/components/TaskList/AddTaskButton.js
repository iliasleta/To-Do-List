import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function AddTaskButton() {
  const { addTask, setAddTask } = useContext(Context);
  return (
    <button
      type="button"
      className="addTask"
      onClick={() => {
        setAddTask(!addTask);
      }}
    >
      Ajout d'une nouvelle tâche
    </button>
  );
}

export default AddTaskButton;
