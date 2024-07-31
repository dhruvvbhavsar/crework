import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import Modal from "./Modal";
import { Task } from "@/app/types";
import { AlignIcon, PlusIcon } from "@/assets/icons";
import { useAuth } from "@/lib/context";

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  addNewLabel: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  addNewLabel,
}) => {
  const { user } = useAuth();
  return (
    <div className="flex-1 min-w-[250px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-[#555555]">{title}</h3>
        <AlignIcon size={20} className="text-[#555555]" />
      </div>
      <Droppable droppableId={title}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <TaskCard key={task.title} status={title} {...task} index={index} />
            ))}
            {provided.placeholder}
            <Modal user={user} statuss={title} classX="w-full">
              {" "}
              <button className="w-full bg-gradient-to-b from-[#3A3A3A] to-[#202020] text-white p-2 rounded-lg flex items-center justify-between">
                <span className="text-[#E3E1E1] text-base">{addNewLabel}</span>{" "}
                <PlusIcon size={16} />
              </button>
            </Modal>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;
