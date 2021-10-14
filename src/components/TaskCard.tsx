import { ReactElement } from "react";
import { TaskType } from "./../interfaces/tasks.interface";

interface Props {
  task: TaskType;
  deleteTask: (id: string | undefined) => void;
}

export default function TaskCard({ task, deleteTask }: Props): ReactElement {
  return (
    <>
      <div className="card card-body bg-secondary rounded-0 text-dark text-center mt-2">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </>
  );
}
