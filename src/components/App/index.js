import { useEffect, useState } from 'react';
import PurgeTasksButton from '../PurgeTasksButton/PurgeTasksButton';
import Context from './context';
import SearchTaskBar from '../SearchTaskBar/SearchTaskBar';
import TaskList from '../TaskList';
import './styles.scss';

function App() {
  const localTask = JSON.parse(localStorage.getItem('tasks')) || {};
  const [tasks, setTasks] = useState(['Toucher de l\'herbe']);
  // const [tasks, setTasks] = useState(() => {
  //   const savedTask = localStorage.getItem('tasks');
  //   const parsedTask = JSON.parse(savedTask);
  //   return parsedTask || '';
  // });
  const [addTask, setAddTask] = useState(false);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addNewTask() {
    setTasks([...tasks, setNewTask]);
  }

  console.log(localStorage);

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
        <SearchTaskBar />
        <TaskList addTask={addTask} tasks={tasks} />
        <PurgeTasksButton />
      </Context.Provider>
    </div>
  );
}

export default App;
