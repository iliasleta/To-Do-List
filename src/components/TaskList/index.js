import PropTypes from 'prop-types';
import Task from './Task';
import './styles.scss';
import AddTaskButton from './AddTaskButton';
import AddTaskField from './AddTaskField';

function TaskList({ addTask }) {
  const taskString = localStorage.getItem('tasks');
  const taskArray = JSON.parse(taskString);
  return (
    <ul className="taskList">
      {taskArray.map((task) => (
        <Task key={task} task={task} />
      ))}
      <AddTaskButton />
      {addTask && (
        <AddTaskField />
      )}
    </ul>
  );
}

TaskList.propTypes = {
  addTask: PropTypes.bool.isRequired,
};

export default TaskList;
