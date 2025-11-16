import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useTasks from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

export default function CreateTask() {
  const { tasks, setTasks } = useTasks();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const create = () => {
    const newTask = { id: uuid(), ...formData };
    setTasks([...tasks, newTask]);
    navigate("/");
  };

  return (
    <>
      <h2>Create Task</h2>
      <TaskForm formData={formData} setFormData={setFormData} onSubmit={create} />
    </>
  );
}