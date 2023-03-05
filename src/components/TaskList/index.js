import { useContext } from 'react';
import Task from './Task';
import './styles.scss';
import AddTaskButton from './AddTaskButton';
import AddTaskField from './AddTaskField';
import Context from '../App/context';

function TaskList() {
  const { addTask } = useContext(Context);
  const taskString = localStorage.getItem('tasks');
  const taskArray = JSON.parse(taskString);

  return (
    <ul className="taskList">
      {taskArray.map((task) => (
        <Task key={task.id} task={task.name} id={task.id} />
      ))}
      <AddTaskButton />
      {addTask && (
        <AddTaskField />
      )}
    </ul>
  );
}

export default TaskList;
