import { useContext } from 'react';
import Task from './Task';
import './styles.scss';
import AddTaskButton from './AddTaskButton';
import AddTaskField from './AddTaskField';
import Context from '../App/context';

function TaskList() {
  const { addTask, searchQuery } = useContext(Context);
  const taskString = localStorage.getItem('tasks');
  const taskArray = JSON.parse(taskString);
  const filteredArr = taskArray.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <ul className="taskList">
      {filteredArr.length > 0
        ? filteredArr.map(task => <Task key={task.id} task={task.name} id={task.id} />)
        : taskArray.map(task => <Task key={task.id} task={task.name} id={task.id} />)}
      <AddTaskButton />
      {addTask && (
        <AddTaskField />
      )}
    </ul>
  );
}

export default TaskList;
