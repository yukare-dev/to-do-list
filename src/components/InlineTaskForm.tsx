import { useState } from "react";
import { Check, X } from "react-feather";

interface InlineTaskFormProps {
  onAddTask: (title: string) => void;
  onCancel: () => void;
}

const InlineTaskForm = ({ onAddTask, onCancel }: InlineTaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    console.log("123342");

    event.preventDefault();
    if (inputValue.trim() === "") return;
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="taskTitle"
      name="addNewTask"
      className="w-full flex gap-2 flex-nowrap"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your task..."
        className="flex-1 p-2 border text-sm text-[#393D3F] border-gray-300 rounded-lg focus:outline-none"
        autoFocus
      />
      <button
        type="submit"
        className="px-2 py-2 text-sm  text-blue-600 rounded-lg hover:text-blue-800 cursor-pointer"
      >
        <Check width={20} height={20} />
      </button>
      <button
        onClick={onCancel}
        type="button"
        className="px-2 py-2 text-sm text-gray-500 rounded-lg hover:text-gray-700 cursor-pointer"
      >
        <X width={20} height={20} />
      </button>
    </form>
  );
};

export default InlineTaskForm;
