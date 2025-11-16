import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, setTasks } = useTasks();

  const task = tasks.find((t) => t.id === id);

  const [formData, setFormData] = useState(task);

  const update = () => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, ...formData } : t
    );
    setTasks(updated);
    navigate("/");
  };

  return (
    <>
      <h2>Edit Task</h2>
      <TaskForm formData={formData} setFormData={setFormData} onSubmit={update} />
    </>
  );
}