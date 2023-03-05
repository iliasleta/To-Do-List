import PropTypes from 'prop-types';
import Task from './Task';
import './styles.scss';
import AddTaskButton from './AddTaskButton';
import AddTaskField from './AddTaskField';

function TaskList({ addTask, tasks }) {
  return (
    <ul className="taskList">
      {tasks.map((task) => (
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
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
