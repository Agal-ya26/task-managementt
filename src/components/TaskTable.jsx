import { Link } from "react-router-dom";

export default function TaskTable({ tasks, deleteTask }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <Link to={`/edit/${task.id}`}>Edit</Link>{" "}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}