import { Trash2 } from "react-feather";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onRemoveTask: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const TaskItem = ({ task, onRemoveTask, onToggleStatus }: TaskItemProps) => {
  return (
    <li className="flex items-center justify-between w-full p-3 text-[#393D3F] bg-[#E1E5F2]/20 rounded-lg shadow-md border-2 border-[#e1e5f2]">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggleStatus(task.id)}
          className="h-4 w-4 rounded-lg text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <span
          className={`text-md ${
            task.isCompleted ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onRemoveTask(task.id)}
        className="text-gray-600 font-bold py-1 px-2 rounded-full cursor-pointer hover:text-white hover:bg-red-600 transition-colors"
      >
        <Trash2 width={18} height={18} />
      </button>
    </li>
  );
};

export default TaskItem;
