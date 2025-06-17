import { useEffect, useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  //State (Estado)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  
  useEffect(() =>{
    async function fetchTasks() {
      //Chamar a API
      const reponse = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" },
      );

      //Pegar os dados que ela retorna
      const data = await reponse.json();

      //Armazenar esses dados no state
      setTasks(data);
    }

    //Ative esta funcao para chamar a API e pegar tarefas da API
    /* fetchTasks(); */
  }, []);


  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Preciso atualizar esta tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //Nao preciso atualizar tarefa
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="flex h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefa</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
