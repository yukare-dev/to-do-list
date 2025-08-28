import "./index.css";
import { useState, useMemo } from "react";
import type { Task } from "./types";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import InlineTaskForm from "./components/InlineTaskForm";
import { Clipboard, Plus } from "react-feather";

type FilterStatus = "all" | "pending" | "completed";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      isCompleted: false,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTimeout(() => {
      setIsFormVisible(false);
    }, 0);
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTaskStatus = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.isCompleted);
      case "pending":
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className="flex flex-col items-center w-150 h-full py-8">
      <div className="text-2xl flex items-center justify-center text-[#393D3F] bg-[#E1E5F2]/30 p-6 rounded-lg w-full shadow-md border-2 border-transparent gap-2">
        <h1 className="font-head">Make your to do list</h1>
        <Clipboard />
      </div>
      <div className="flex flex-row justify-between gap-6 py-8 w-full">
        <button
          onClick={() => setIsFormVisible(true)}
          className="flex items-center justify-center text-sm shadow-md p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <Plus width={15} height={15} stroke="white" />
          New task
        </button>
        <div className="flex">
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>
      </div>
      <div
        className={`flex flex-col transition-all duration-300 ease-in-out overflow-hidden w-full ${
          isFormVisible ? "max-h-50" : "max-h-0"
        }`}
      >
        {isFormVisible && (
          <InlineTaskForm
            onAddTask={handleAddTask}
            onCancel={() => setIsFormVisible(false)}
          />
        )}
      </div>
      <div className="w-full">
        <TaskList
          tasks={filteredTasks}
          onRemoveTask={handleRemoveTask}
          onToggleStatus={handleToggleTaskStatus}
        />
      </div>
    </div>
  );
}
