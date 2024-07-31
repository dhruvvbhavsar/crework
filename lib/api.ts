import axios from "axios";

// const API_URL = "http://localhost:3001/api";
const API_URL = "https://crework-backend-peach.vercel.app/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  const response = await api.post("/auth/register", { email, password, name });
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};

export const getTasks = async (userId: string) => {
  const response = await api.get(`/tasks/${userId}`);
  return response.data;
};

export const getTask = async (taskId: string) => {
  const response = await api.get(`/tasks/${taskId}`);
  return response.data;
};

export const createTask = async (taskData: {
  title: string;
  description: string;
  status: string;
  priority: string;
  user: any;
  date: Date;
}) => {
  const response = await api.post("/tasks", taskData);
  return response.data;
};

export const updateTask = async (
  taskId: string,
  taskData: {
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
    date?: Date;
    order?: number;
    user?: any;
  }
) => {
  console.log(taskData, taskId);
  const response = await api.put(`/tasks/${taskId}`, taskData);
  return response.data;
};
