import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="flex flex-col space-y-4 rounded-md bg-slate-200 p-6 shadow">
            <Input
                type="text"
                placeholder="Digite o título da tarefa"
                value={title}
                onChange={(event)=> setTitle(event.target.value)}
            />


            <Input
                type="text"
                placeholder="Digite o descrição da tarefa"
                value={description}
                onChange={(event)=>setDescription(event.target.value)}
            />

            <button onClick={() => {
                //Verificar se o titulo e a descricao estao preenchidos
                if(!title.trim()){
                    return alert("Preencha o título da tarefa");
                }

                if(!description.trim()){
                    return alert("Preencha a descrição da terefa");
                }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }} 
                className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white">
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;
