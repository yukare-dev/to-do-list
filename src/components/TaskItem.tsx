import type { Task } from '../types';

interface TaskItemProps {
    task: Task;
    onRemoveTask: (id: number) => void;
}

const TaskItem = ({ task, onRemoveTask}: TaskItemProps) => {
    return (
        <li className='flex items-center justify-between p-3'>
            <span className='text-lg'>{task.title}</span>
            <button onClick={() => onRemoveTask(task.id)} className='bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full hover:bg-red-600 transition-colors'>Remover</button>
        </li>
    )
}

export default TaskItem;