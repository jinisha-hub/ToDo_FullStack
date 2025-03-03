
// import React, { useState } from "react";
// import { homeStyles } from "./homestyle";
// import { addTaskApi, Task } from "../../api/taskApi";


// const Tasks: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [newTask, setNewTask] = useState<
//     Omit<Task, "id" | "createdDate" | "status">
//   >({
//     title: "",
//     description: "",
//     expectedDate: "",
//   });

//   const addTask = async () => {
//     const user = JSON.parse(localStorage.getItem("user") || "null");
  
//     if (!user) {
//       console.error("User not authenticated");
//       alert("Please log in to add tasks.");
//       return;
//     }
  
//     try {
//       if (!newTask.title || !newTask.description || !newTask.expectedDate) {
//         alert("Please fill out all the fields.");
//         return;
//       }
  
//       const taskToAdd = {
//         title: newTask.title,
//         description: newTask.description,
//         expectedDate: newTask.expectedDate,
//       };
  
//       const response = await addTaskApi(user.id, taskToAdd);
  
//       setTasks([...tasks, response.data]);
//       setShowModal(false);
//       setNewTask({ title: "", description: "", expectedDate: "" });
  
//       console.log("Task added successfully:", response.data);
//     } catch (error: any) {
//       console.error("Failed to add task:", error.response?.data || error.message);
//       alert(error.response?.data?.error || "An error occurred while adding the task.");
//     }
//   };
//    const deleteTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   function updateTask(id: number, arg1: string, value: string): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div className={homeStyles.container}>
//       <h1 className={homeStyles.title}>Task Manager</h1>
//       <button
//         onClick={() => setShowModal(true)}
//         className={homeStyles.addButton}
//       >
//         Add New Task
//       </button>

//       {/* Task Table */}
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
//             {tasks.map((task) => (
//               <tr key={task.id} className={homeStyles.tableRow}>
//                 {/* Editable Title */}
//                 <td className={homeStyles.tableCell}>
//                   <input
//                     type="text"
//                     value={task.title}
//                     onChange={(e) =>
//                       updateTask(task.id, "title", e.target.value)
//                     }
//                     className={homeStyles.inputField}
//                   />
//                 </td>

//                 {/* Editable Description */}
//                 <td className={homeStyles.tableCell}>
//                   <textarea
//                     value={task.description}
//                     onChange={(e) =>
//                       updateTask(task.id, "description", e.target.value)
//                     }
//                     className={homeStyles.textArea}
//                     rows={2}
//                   />
//                 </td>

//                 {/* Created Date (Non-editable) */}
//                 <td className={homeStyles.tableCell}>
//                   <input
//                     type="text"
//                     value={task.createdDate}
//                     disabled
//                     className={homeStyles.dateField}
//                   />
//                 </td>

//                 {/* Expected Completion Date */}
//                 <td className={homeStyles.tableCell}>
//                   <input
//                     type="date"
//                     value={task.expectedDate}
//                     onChange={(e) =>
//                       updateTask(task.id, "expectedDate", e.target.value)
//                     }
//                     className={homeStyles.dateField}
//                   />
//                 </td>

//                 {/* Status Dropdown */}
//                 <td className={homeStyles.tableCell}>
//                   <select
//                     value={task.status}
//                     onChange={(e) =>
//                       updateTask(task.id, "status", e.target.value)
//                     }
//                     className={homeStyles.statusDropdown}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>

//                 {/* Delete Button */}
//                 <td className={homeStyles.tableCell}>
//                   <button
//                     onClick={() => deleteTask(task.id)}
//                     className={homeStyles.deleteButton}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for Adding New Task */}
//       {showModal && (
//         <div className={homeStyles.modalBackdrop}>
//           <div className={homeStyles.modalContainer}>
//             <h2 className={homeStyles.modalTitle}>Add New Task</h2>

//             <input
//               type="text"
//               placeholder="Title"
//               value={newTask.title}
//               onChange={(e) =>
//                 setNewTask({ ...newTask, title: e.target.value })
//               }
//               className={homeStyles.modalInput}
//             />

//             <textarea
//               placeholder="Description"
//               value={newTask.description}
//               onChange={(e) =>
//                 setNewTask({ ...newTask, description: e.target.value })
//               }
//               className={homeStyles.modalInput}
//               rows={2}
//             />
//             <span>Due Date:</span>
//             <input
//               type="date"
//               placeholder="Due Date"
//               value={newTask.expectedDate}
//               onChange={(e) =>
//                 setNewTask({ ...newTask, expectedDate: e.target.value })
//               }
//               className={homeStyles.modalInput}
//             />

//             <div className={homeStyles.modalButtonContainer}>
//               <button
//                 onClick={addTask}
//                 className={`${homeStyles.modalButton} ${homeStyles.saveButton}`}
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className={`${homeStyles.modalButton} ${homeStyles.cancelButton}`}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tasks;
// function useAuth(): { user: any; } {
//   throw new Error("Function not implemented.");
// }

import React, { useState, useEffect } from "react";
import { homeStyles } from "./homestyle";
import { addTaskApi, getTasks, Task } from "../../api/taskApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<
    Omit<Task, "id" | "createdDate" | "status">
  >({
    title: "",
    description: "",
    expectedDate: "",
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      console.error("User not authenticated - no token found");
      alert("Please log in to access tasks.");
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/task", {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token is passed here
          },
        });

        setTasks(response.data);
      } catch (error: any) {
        console.error("Failed to fetch tasks:", error.response?.data || error.message);
        alert(error.response?.data?.error || "Failed to load tasks.");
      }
    };

    fetchTasks();
  }, [token]);

  // const addTask = async () => {
  //   const user = JSON.parse(localStorage.getItem("user") || "null");

  //   if (!user || !token) {
  //     console.error("User not authenticated");
  //     alert("Please log in to add tasks.");
  //     return;
  //   }

  //   try {
  //     if (!newTask.title || !newTask.description || !newTask.expectedDate) {
  //       alert("Please fill out all the fields.");
  //       return;
  //     }

  //     const taskToAdd = {
  //       title: newTask.title,
  //       description: newTask.description,
  //       expectedDate: newTask.expectedDate,
  //     };

  //     //const response = await addTaskApi(user.id, taskToAdd, token); // Pass the token to your API
  //     const response = await axios.post(
  //       `http://localhost:5000/api/task/${user.id}`,
  //       taskToAdd,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Added Authorization header here
  //         },
  //       }
  //     );
  //     setTasks([...tasks, response.data]);
  //     setShowModal(false);
  //     setNewTask({ title: "", description: "", expectedDate: "" });

  //     console.log("Task added successfully:", response.data);
  //   } catch (error: any) {
  //     console.error("Failed to add task:", error.response?.data || error.message);
  //     alert(error.response?.data?.error || "An error occurred while adding the task.");
  //   }
  // };
  const addTask = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user || !token) {
      const user = JSON.parse(localStorage.getItem("user") || "null");
const token = localStorage.getItem("token");

console.log("User:", user); // Debugging
console.log("Token:", token); // Debugging

      console.error("User not authenticated", { user, token });
      alert("Please log in to add tasks.");
      return;
    }

    try {
      if (!newTask.title || !newTask.description || !newTask.expectedDate) {
        alert("Please fill out all the fields.");
        return;
      }

      const taskToAdd = {
        title: newTask.title,
        description: newTask.description,
        expectedDate: newTask.expectedDate,
      };

      const response = await addTaskApi(user.id, taskToAdd, token);

      setTasks([...tasks, response.data]);
      setShowModal(false);
      setNewTask({ title: "", description: "", expectedDate: "" });

      console.log("Task added successfully:", response.data);
    } catch (error) {
      const err = error as any;
      console.error("Failed to add task:", err.response?.data || err.message);
      alert(err.response?.data?.error || "An error occurred while adding the task.");
    }
  };
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, field: string, value: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, [field]: value } : task
    );
    setTasks(updatedTasks);
  };

  const handleLogout = () =>{
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.title}>Task Manager</h1>
      <button
        onClick={() => setShowModal(true)}
        className={homeStyles.addButton}
      >
        Add New Task
      </button>
      <button
        onClick={handleLogout}
        className={homeStyles.addButton}
      >
        Logout user
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
            {tasks.map((task) => (
              <tr key={task.id} className={homeStyles.tableRow}>
                <td className={homeStyles.tableCell}>
                  <input
                    type="text"
                    value={task.title}
                    onChange={(e) =>
                      updateTask(task.id, "title", e.target.value)
                    }
                    className={homeStyles.inputField}
                  />
                </td>
                <td className={homeStyles.tableCell}>
                  <textarea
                    value={task.description}
                    onChange={(e) =>
                      updateTask(task.id, "description", e.target.value)
                    }
                    className={homeStyles.textArea}
                    rows={2}
                  />
                </td>
                <td className={homeStyles.tableCell}>
                  <input
                    type="text"
                    value={task.createdDate}
                    disabled
                    className={homeStyles.dateField}
                  />
                </td>
                <td className={homeStyles.tableCell}>
                  <input
                    type="date"
                    value={task.expectedDate}
                    onChange={(e) =>
                      updateTask(task.id, "expectedDate", e.target.value)
                    }
                    className={homeStyles.dateField}
                  />
                </td>
                <td className={homeStyles.tableCell}>
                  <select
                    value={task.status}
                    onChange={(e) =>
                      updateTask(task.id, "status", e.target.value)
                    }
                    className={homeStyles.statusDropdown}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className={homeStyles.tableCell}>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className={homeStyles.deleteButton}
                  >
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
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className={homeStyles.modalInput}
            />

            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className={homeStyles.modalInput}
              rows={2}
            />
            <span>Due Date:</span>
            <input
              type="date"
              placeholder="Due Date"
              value={newTask.expectedDate}
              onChange={(e) =>
                setNewTask({ ...newTask, expectedDate: e.target.value })
              }
              className={homeStyles.modalInput}
            />

            <div className={homeStyles.modalButtonContainer}>
              <button
                onClick={addTask}
                className={`${homeStyles.modalButton} ${homeStyles.saveButton}`}
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className={`${homeStyles.modalButton} ${homeStyles.cancelButton}`}
              >
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
