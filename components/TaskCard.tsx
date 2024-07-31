import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { Task } from "@/app/types";
import { ClockIcon } from "@/assets/icons";
import Modal from "./Modal";
import { useAuth } from "@/lib/context";

interface TaskCardProps extends Task {
  index: number;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  status,
  priority,
  date,
  timeAgo,
  index,
}) => {
  const { user } = useAuth();
  return (
    <Modal
      user={user}
      classX="w-full text-left" 
      statuss={status}
      edit
      task={{ id, title, description, priority, date, timeAgo }}
    >
      <Draggable draggableId={title} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-[#F9F9F9] border border-[#DEDEDE] space-y-3 py-4 px-3 rounded-lg mb-4"
          >
            <h4 className="text-base font-medium text-[#606060] mb-1">
              {title}
            </h4>
            <p className="text-[#797979] text-sm">{description}</p>
            <div className="flex items-center justify-between">
              <span
                className={`text-xs px-2 py-1 text-white rounded-lg ${
                  priority === "Urgent"
                    ? "bg-[#FF6B6B] "
                    : priority === "Medium"
                    ? "bg-[#FFA235]"
                    : "bg-[#0ECC5A]"
                }`}
              >
                {priority}
              </span>
            </div>
            <div className="flex items-center  ">
              <ClockIcon size={24} className="mr-1" />
              <span className="text-[#606060] text-sm font-semibold">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <div className="text-sm font-medium text-[#797979]">{timeAgo}</div>
          </div>
        )}
      </Draggable>
    </Modal>
  );
};

export default TaskCard;
