import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex rounded-md bg-slate-200 p-2">
          <div className="flex w-full items-stretch justify-between gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`flex w-full items-center gap-2 overflow-hidden break-words rounded-md bg-slate-400 p-2 text-left text-white ${task.isCompleted && "text-green-500 line-through"}`}
            >
              {task.isCompleted && <CheckIcon className="text-green-500" />}
              {task.title}
            </button>

            <div className="flex flex-col gap-2">
              <Button onClick={() => onSeeDetailsClick(task)}>
                <ChevronRightIcon />
              </Button>
              <Button onClick={() => onDeleteTaskClick(task.id)}>
                <TrashIcon />
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
