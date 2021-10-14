import React, { ReactElement } from "react";
import { TaskType } from "../interfaces/tasks.interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: TaskType[];
  deleteTask: (id: string | undefined) => void;
}

export default function TaskList({ tasks, deleteTask }: Props): ReactElement {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="col-md-4">
          <TaskCard deleteTask={deleteTask} task={task} />
        </div>
      ))}
    </>
  );
}
