import { ArrowLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="relative mb-6 flex justify-center">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="absolute bottom-0 left-0 top-0 text-slate-100"
          >
            <ArrowLeftIcon className="text-slate-100" />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="rounded-md bg-slate-200 p-4">
          <h2 className="break-words text-xl font-bold text-slate-600">
            {title}
          </h2>
          <p className="break-words text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
