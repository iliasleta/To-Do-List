import { useEffect, useState } from 'react';
import PurgeTasksButton from '../PurgeTasksButton/PurgeTasksButton';
import Context from './context';
import SearchTaskBar from '../SearchTaskBar/SearchTaskBar';
import TaskList from '../TaskList';
import './styles.scss';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  console.log(localStorage);

  return (
    <div className="app">
      <Context.Provider value="context provider value">
        <SearchTaskBar />
        <TaskList />
        <PurgeTasksButton />
      </Context.Provider>
    </div>
  );
}

export default App;
