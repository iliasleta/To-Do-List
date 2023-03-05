import PurgeTasksButton from '../PurgeTasksButton/PurgeTasksButton';
import SearchTaskBar from '../SearchTaskBar/SearchTaskBar';
import TaskList from '../TaskList';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <SearchTaskBar />
      <TaskList />
      <PurgeTasksButton />
    </div>
  );
}

export default App;
