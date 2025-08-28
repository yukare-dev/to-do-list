import type { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onRemoveTask: (id: number) => void;
}

const TaskList = ({ tasks, onRemoveTask}: TaskListProps) => {
    return (
        <div className='bg-[#E1E5F2] rounded-lg w-full p-4 text-center shadow-md border-2 border-[#e1e5f2]'>
            {tasks.length === 0 ? (
                <p>Ops... your list is empty :(</p>
            ) : (
                <ul className='bg-[#E1E5F2] rounded-lg w-full p-4 text-center shadow-md border-2 border-[#e1e5f2]'>
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onRemoveTask={onRemoveTask}/>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskList;