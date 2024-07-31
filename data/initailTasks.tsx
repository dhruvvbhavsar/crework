import { TaskStatus, Task } from "@/app/types";

export const initialTasks: Record<TaskStatus, Task[]> = {
  "To do": [
    {
      id: "1",
      title: "Implement User Authentication",
      description:
        "Develop and integrate user authentication using email and password.",
      priority: "Urgent",
      date: "2024-08-15",
      timeAgo: "1 hr ago",
    },
  ],
  "In progress": [
    {
      id: "2",
      title: "Design Home Page UI",
      description:
        "Develop and integrate user authentication using email and password.",
      priority: "Medium",
      date: "2024-08-15",
      timeAgo: "1 hr ago",
    },
    {
      id: "3",
      title: "Conduct User Feedback Survey",
      description: "Collect and analyze user feedback to improve app features.",
      priority: "Low",
      date: "2024-08-05",
      timeAgo: "3 hr ago",
    },
  ],
  "Under review": [
    {
      id: "4",
      title: "Integrate Cloud Storage",
      description: "Enable cloud storage for note backup and synchronization.",
      priority: "Urgent",
      date: "2024-08-20",
      timeAgo: "2 days ago",
    },
  ],
  Finished: [
    {
      id: "5",
      title: "Test Cross-browser Compatibility",
      description:
        "Ensure the app works seamlessly across different web browsers.",
      priority: "Medium",
      date: "2024-07-30",
      timeAgo: "4 days ago",
    },
  ],
};
