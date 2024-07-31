"use client";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import TaskColumn from "@/components/TaskColumn";
import { Task, TaskStatus } from "@/app/types";
import { barlow } from "@/assets/fonts";
import { getTasks, updateTask } from "@/lib/api";
import { useAuth } from "@/lib/context";
import { useRouter } from "next/navigation";

const allStatuses: TaskStatus[] = [
  "To do",
  "In progress",
  "Under review",
  "Finished",
];

const emptyTasks: Record<TaskStatus, Task[]> = {
  "To do": [],
  "In progress": [],
  "Under review": [],
  Finished: [],
};

const TaskManagementUI: React.FC = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Record<TaskStatus, Task[]>>(emptyTasks);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();

  const fetchTasks = useCallback(async () => {

    try {
      const fetchedTasks = await getTasks(user._id);
      const tasksByStatus = allStatuses.reduce(
        (acc, status) => {
          acc[status] = fetchedTasks.filter(
            (task: any) => task.status === status
          );
          return acc;
        },
        { ...emptyTasks }
      );

      startTransition(() => {
        setTasks(tasksByStatus);
        setIsLoading(false);
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tasks. Please try again later.");
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/auth/login");
    } else if (isAuthenticated === true) {
      fetchTasks();
    }
  }, [isAuthenticated, router, fetchTasks]);

  const onDragEnd = async (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      const sourceColumn = [...updatedTasks[source.droppableId as TaskStatus]];
      const destinationColumn = [
        ...updatedTasks[destination.droppableId as TaskStatus],
      ];

      const [movedTask] = sourceColumn.splice(source.index, 1);
      destinationColumn.splice(destination.index, 0, {
        ...movedTask,
        // @ts-ignore
        status: destination.droppableId as TaskStatus,
      });

      updatedTasks[source.droppableId as TaskStatus] = sourceColumn;
      updatedTasks[destination.droppableId as TaskStatus] = destinationColumn;
      // @ts-ignore
      updateTask(movedTask._id, {
        status: destination.droppableId as TaskStatus,
        order: destination.index,
        user,
      });

      return updatedTasks;
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Suspense fallback={<p>loading....</p>}>
      <div className={` bg-[#F7F7F7] h-screen flex`}>
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Header />
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <p>Loading tasks...</p>
            </div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="flex space-x-8 bg-white p-4 rounded-lg">
                {allStatuses.map((columnTitle) => (
                  <TaskColumn
                    key={columnTitle}
                    title={columnTitle}
                    tasks={tasks[columnTitle] || []}
                    addNewLabel="Add new"
                  />
                ))}
              </div>
            </DragDropContext>
          )}
        </main>
      </div>
    </Suspense>
  );
};

export default TaskManagementUI;
