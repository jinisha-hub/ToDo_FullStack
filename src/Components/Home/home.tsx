// import React, { useState } from "react";
// import { homeStyles } from "./homestyle";

// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   createdDate: string;
//   expectedDate: string;
//   status: string;
// }

// const Tasks: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const addTask = () => {
//     const newTask: Task = {
//       id: Date.now(),
//       title: "New Task",
//       description: "Task Description",
//       createdDate: new Date().toISOString().split("T")[0], // Current date
//       expectedDate: "",
//       status: "Pending",
//     };
//     setTasks([...tasks, newTask]);
//   };

//   const updateTask = (id: number, field: keyof Task, value: string) => {
//     setTasks(tasks.map(task => (task.id === id ? { ...task, [field]: value } : task)));
//   };

//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return (
//     <div className={homeStyles.container}>
//       <h1 className={homeStyles.title}>Task Manager</h1>
//       <button onClick={addTask} className={homeStyles.addButton}>
//         Add New Task
//       </button>

//       <div className={homeStyles.taskContainer}>
//         <table className={homeStyles.table}>
//           <thead>
//             <tr className={homeStyles.tableHeader}>
//               <th className={homeStyles.tableCell}>Title</th>
//               <th className={homeStyles.tableCell}>Description</th>
//               <th className={homeStyles.tableCell}>Created On</th>
//               <th className={homeStyles.tableCell}>Expected Completion</th>
//               <th className={homeStyles.tableCell}>Status</th>
//               <th className={homeStyles.tableCell}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map(task => (
//               <tr key={task.id} className={homeStyles.tableRow}>
//                 {/* Editable Title */}
//                 <td className={homeStyles.tableCell}>
//                   <input
//                     type="text"
//                     value={task.title}
//                     onChange={e => updateTask(task.id, "title", e.target.value)}
//                     className={homeStyles.inputField}
//                   />
//                 </td>

//                 {/* Editable Description */}
//                 <td className={homeStyles.tableCell}>
//                   <textarea
//                     value={task.description}
//                     onChange={e => updateTask(task.id, "description", e.target.value)}
//                     className={homeStyles.textArea}
//                     rows={2}
//                   />
//                 </td>

//                 {/* Created Date (Non-editable) */}
//                 <td className={homeStyles.tableCell}>
//                   <input type="text" value={task.createdDate} disabled className={homeStyles.dateField} />
//                 </td>

//                 {/* Expected Completion Date */}
//                 <td className={homeStyles.tableCell}>
//                   <input
//                     type="date"
//                     value={task.expectedDate}
//                     onChange={e => updateTask(task.id, "expectedDate", e.target.value)}
//                     className={homeStyles.dateField}
//                   />
//                 </td>

//                 {/* Status Dropdown */}
//                 <td className={homeStyles.tableCell}>
//                   <select
//                     value={task.status}
//                     onChange={e => updateTask(task.id, "status", e.target.value)}
//                     className={homeStyles.statusDropdown}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>

//                 {/* Delete Button */}
//                 <td className={homeStyles.tableCell}>
//                   <button onClick={() => deleteTask(task.id)} className={homeStyles.deleteButton}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Tasks;
import React, { useState } from "react";
import { homeStyles } from "./homestyle";

interface Task {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  expectedDate: string;
  status: string;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<Omit<Task, "id" | "createdDate" | "status">>({
    title: "",
    description: "",
    expectedDate: "",
  });

  const addTask = () => {
    const taskToAdd: Task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      createdDate: new Date().toISOString().split("T")[0],
      expectedDate: newTask.expectedDate,
      status: "Pending",
    };

    setTasks([...tasks, taskToAdd]);
    setShowModal(false);
    setNewTask({ title: "", description: "", expectedDate: "" });
  };

  const updateTask = (id: number, field: keyof Task, value: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, [field]: value } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.title}>Task Manager</h1>
      <button onClick={() => setShowModal(true)} className={homeStyles.addButton}>
        Add New Task
      </button>

      {/* Task Table */}
      <div className={homeStyles.taskContainer}>
        <table className={homeStyles.table}>
          <thead>
            <tr className={homeStyles.tableHeader}>
              <th className={homeStyles.tableCell}>Title</th>
              <th className={homeStyles.tableCell}>Description</th>
              <th className={homeStyles.tableCell}>Created On</th>
              <th className={homeStyles.tableCell}>Expected Completion</th>
              <th className={homeStyles.tableCell}>Status</th>
              <th className={homeStyles.tableCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id} className={homeStyles.tableRow}>
                {/* Editable Title */}
                <td className={homeStyles.tableCell}>
                  <input
                    type="text"
                    value={task.title}
                    onChange={e => updateTask(task.id, "title", e.target.value)}
                    className={homeStyles.inputField}
                  />
                </td>

                {/* Editable Description */}
                <td className={homeStyles.tableCell}>
                  <textarea
                    value={task.description}
                    onChange={e => updateTask(task.id, "description", e.target.value)}
                    className={homeStyles.textArea}
                    rows={2}
                  />
                </td>

                {/* Created Date (Non-editable) */}
                <td className={homeStyles.tableCell}>
                  <input type="text" value={task.createdDate} disabled className={homeStyles.dateField} />
                </td>

                {/* Expected Completion Date */}
                <td className={homeStyles.tableCell}>
                  <input
                    type="date"
                    value={task.expectedDate}
                    onChange={e => updateTask(task.id, "expectedDate", e.target.value)}
                    className={homeStyles.dateField}
                  />
                </td>

                {/* Status Dropdown */}
                <td className={homeStyles.tableCell}>
                  <select
                    value={task.status}
                    onChange={e => updateTask(task.id, "status", e.target.value)}
                    className={homeStyles.statusDropdown}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>

                {/* Delete Button */}
                <td className={homeStyles.tableCell}>
                  <button onClick={() => deleteTask(task.id)} className={homeStyles.deleteButton}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding New Task */}
      {showModal && (
        <div className={homeStyles.modalBackdrop}>
          <div className={homeStyles.modalContainer}>
            <h2 className={homeStyles.modalTitle}>Add New Task</h2>

            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={e => setNewTask({ ...newTask, title: e.target.value })}
              className={homeStyles.modalInput}
            />

            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={e => setNewTask({ ...newTask, description: e.target.value })}
              className={homeStyles.modalInput}
              rows={2}
            />
            <span>Due Date:</span>
            <input
              type="date"
              placeholder="Due Date"
              value={newTask.expectedDate}
              onChange={e => setNewTask({ ...newTask, expectedDate: e.target.value })}
              className={homeStyles.modalInput}
            />

            <div className={homeStyles.modalButtonContainer}>
              <button onClick={addTask} className={`${homeStyles.modalButton} ${homeStyles.saveButton}`}>
                Save
              </button>
              <button onClick={() => setShowModal(false)} className={`${homeStyles.modalButton} ${homeStyles.cancelButton}`}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
