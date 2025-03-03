// import axiosInstance from './axiosInstance';

// export interface Task {
//     id: number; // Keeping it as number
//     title: string;
//     description: string;
//     createdDate: string;
//     expectedDate: string;
//     status: string;
//   }

//   export const getTasks = (userId: number, p0: string) => axiosInstance.get("/api/task");
//   export const addTaskApi = (userId: number, task: { title: string; description: string; expectedDate: string }) =>
//     axiosInstance.post(`/api/task/${userId}`, task);
//   //export const addTaskApi = (userId: number, title: string, description: string, expectedDate: string, p0: string, task: Omit<Task, "id">) => axiosInstance.post("/api/task", task);
//   export const updateTaskApi = (id: number, task: Task) => axiosInstance.put(`/api/task/${id}`, task);
//   export const deleteTaskApi = (id: number) => axiosInstance.delete(`/api/task/${id}`);
import axiosInstance from './axiosInstance';

export interface Task {
    id: number; // Keeping it as number
    title: string;
    description: string;
    createdDate: string;
    expectedDate: string;
    status: string;
}

//export const getTasks = (userId: number, p0: string) => axiosInstance.get("/api/task");
export const getTasks = (token: string) =>
  axiosInstance.get("/api/task", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const addTaskApi = (
    userId: number,
    task: { title: string; description: string; expectedDate: string },
    token: string
) => axiosInstance.post(`/task`, task, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const updateTaskApi = (id: number, task: Task) => axiosInstance.put(`/api/task/${id}`, task);

export const deleteTaskApi = (id: number) => axiosInstance.delete(`/api/task/${id}`);
