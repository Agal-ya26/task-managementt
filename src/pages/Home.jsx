import useTasks from "../hooks/useTasks";
import TaskTable from "../components/TaskTable";

export default function Home() {
  const { tasks, setTasks } = useTasks();

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <h2>All Tasks</h2>
      <TaskTable tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}