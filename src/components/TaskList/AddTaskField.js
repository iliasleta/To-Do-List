import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function AddTaskField() {
  const {
    setTasks, setNewTask, tasks, newTask, setAddTask,
  } = useContext(Context);
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      const taskToAdd = {
        id: new Date().getTime(),
        name: newTask,
      };
      setTasks([
        ...tasks,
        taskToAdd,
      ]);
      const updatedTasks = localTasks.concat(taskToAdd);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setAddTask(false);
      setNewTask('');
    }}
    >
      <input
        type="text"
        className="addTaskField"
        placeholder="Nouvelle tâche..."
        value={newTask}
        maxLength={50}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
      />
      <input type="submit" className="addTaskField" value="Ajouter la tâche" />
    </form>
  );
}

export default AddTaskField;
