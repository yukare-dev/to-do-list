type FilterStatus = "all" | "pending" | "completed";

interface TaskFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

const buttonBaseStyle =
  "px-3 py-1 text-sm font-medium rounded-full transition-colors cursor-pointer";
const activeButtonStyle = "bg-blue-600 text-white hover:bg-blue-700";
const inactiveButtonStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300";

const TaskFilter = ({ currentFilter, onFilterChange }: TaskFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className={`shadow-md ${buttonBaseStyle} ${
          currentFilter === "all" ? activeButtonStyle : inactiveButtonStyle
        }`}
        onClick={() => onFilterChange("all")}
      >
        {" "}
        All
      </button>
      <button
        className={`shadow-md ${buttonBaseStyle} ${
          currentFilter === "pending" ? activeButtonStyle : inactiveButtonStyle
        }`}
        onClick={() => onFilterChange("pending")}
      >
        {" "}
        Pending
      </button>
      <button
        className={`shadow-md ${buttonBaseStyle} ${
          currentFilter === "completed"
            ? activeButtonStyle
            : inactiveButtonStyle
        }`}
        onClick={() => onFilterChange("completed")}
      >
        {" "}
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
