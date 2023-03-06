import { useContext } from 'react';
import Context from '../App/context';
import './styles.scss';

function AddTaskField() {
  const {
    setTasks, setNewTask, tasks, newTask, setAddTask,
  } = useContext(Context);
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  return (
    <form
      label="new_task"
      onSubmit={(event) => {
        event.preventDefault();
        if (newTask.length === 0) {
          alert('Votre tâche est vide');
        }
        else {
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
        }
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
      <input type="submit" label="new_task" className="addTaskField" value="Ajouter la nouvelle tâche" />
    </form>
  );
}

export default AddTaskField;
