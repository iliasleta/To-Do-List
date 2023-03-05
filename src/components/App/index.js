import { useEffect, useState } from 'react';
import PurgeTasksButton from '../PurgeTasksButton/PurgeTasksButton';
import Context from './context';
import SearchTaskBar from '../SearchTaskBar/SearchTaskBar';
import TaskList from '../TaskList';
import './styles.scss';

function App() {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const defaultTask = [
      { id: new Date().getTime(), name: 'Exemple de tâche' },
    ];

    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // If the key doesn't exist in localStorage, setting a default value for the first render
    if (storedTasks.length === 0) {
      localStorage.setItem('tasks', JSON.stringify(defaultTask));
      setTasks(defaultTask);
    }
  }, [searchQuery]);

  function addNewTask() {
    setTasks([...tasks, setNewTask]);
  }

  return (
    <div className="app">
      <Context.Provider
        value={{
          addTask,
          setAddTask,
          tasks,
          setTasks,
          setNewTask,
          newTask,
          addNewTask,
        }}
      >
        <SearchTaskBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TaskList addTask={addTask} tasks={tasks} setTasks={setTasks} />
        <PurgeTasksButton tasks={tasks} setTasks={setTasks} />
      </Context.Provider>
    </div>
  );
}

export default App;
