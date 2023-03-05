import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function AddTaskField() {
  const { setTasks, setNewTask, addNewTask, tasks, newTask } = useContext(Context);
  console.log(setTasks);
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(newTask);
      // setTasks(newTask);
      setTasks([
        ...tasks,
        newTask,
      ]);
      localTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(localTasks));
    }}
    >
      <input
        type="text"
        className="addTaskField"
        placeholder="Nouvelle tâche..."
        value={newTask}
        onChange={(event) => {
          console.log(event.target.value);
          setNewTask(event.target.value);
        }}
      />
      <input type="submit" className="addTaskField" value="Ajouter une nouvelle tâche" />
    </form>
  );
}

export default AddTaskField;
