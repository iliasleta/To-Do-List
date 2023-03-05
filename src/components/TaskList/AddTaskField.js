import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function AddTaskField() {
  const { setTasks, setNewTask, tasks, newTask, setAddTask } = useContext(Context);
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
      const updatedTasks = localTasks.concat(newTask);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setAddTask(false);
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
