import PropTypes from 'prop-types';
import './styles.scss';

function PurgeTasksButton({ setTasks }) {
  function clearLocalStorage() {
    localStorage.setItem('tasks', '[]');
    setTasks([]);
  }
  return (
    <button
      type="button"
      className="purgeButton"
      onClick={clearLocalStorage}
    >
      Supprimer Tout
    </button>
  );
}

PurgeTasksButton.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default PurgeTasksButton;
