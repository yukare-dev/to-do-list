import type { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const TaskList = ({ tasks, onRemoveTask, onToggleStatus }: TaskListProps) => {
  return (
    <div className="rounded-lg w-full p-4 text-center">
      {tasks.length === 0 ? (
        <p>Ops... your list is empty :(</p>
      ) : (
        <ul className="w-full flex flex-col gap-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onRemoveTask={onRemoveTask}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
