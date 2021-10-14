import { useState } from "react";
import logo from "./logo.svg";

import { TaskType } from "./interfaces/tasks.interface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { v4 } from "uuid";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: v4(),
      title: "Learn React",
      description: "Learn React with TypeScript",
      complete: false,
    },
  ]);

  const addANewTask = (task: TaskType) =>
    setTasks([...tasks, { ...task, id: v4(), complete: false }]);

  const deleteTask = (id: string | undefined) =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} style={{ width: "4rem" }} alt="React" />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <TaskList deleteTask={deleteTask} tasks={tasks} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <TaskForm addANewTask={addANewTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
