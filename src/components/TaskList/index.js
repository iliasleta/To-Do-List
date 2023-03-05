import Task from './Task';
import './styles.scss';
import AddTaskButton from './AddTaskButton';

function TaskList() {
  return (
    <ul className="taskList">
      <Task />
      <Task />
      <Task />
      <Task />
      <AddTaskButton />
    </ul>
  );
}

export default TaskList;
