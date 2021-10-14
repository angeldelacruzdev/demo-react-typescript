import { ChangeEvent, FormEvent, ReactElement, useState, useRef } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { TaskType } from "./../interfaces/tasks.interface";

interface Props {
  addANewTask: (task: TaskType) => void;
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ addANewTask }: Props): ReactElement {
  const refTitle = useRef<HTMLInputElement>(null);

  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: handleInputChange): void => {
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState);
    refTitle.current?.focus();
  };

  return (
    <div className="card card-body  bg-secondary text-dark">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control"
          onChange={handleInputChange}
          value={task.title}
          ref={refTitle}
        />

        <textarea
          name="description"
          rows={2}
          className="form-control mt-1"
          placeholder="Write description"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary mt-2">
          Save
          <AiFillPlusCircle />
        </button>
      </form>
    </div>
  );
}
