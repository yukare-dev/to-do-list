import { useState } from 'react';

interface InlineTaskFormProps {
    onAddTask: (title: string) => void;
    onCancel: () => void;
}

const InlineTaskForm = ({ onAddTask, onCancel}: InlineTaskFormProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue.trim() === '') return;
        onAddTask(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} id='taskTitle' name='taskTitle' className=' shadow-md p-4 rounded-lg'>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Type your task...' className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' autoFocus/>
            <div className='flex justify-end gap-2 mt-3'>
                <button type='button' onClick={onCancel} className='px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-200'>Cancelar</button>
                <button type='submit' onClick={onCancel} className='px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-bue-700'>Add task</button>
            </div>
        </form>
    )
}

export default InlineTaskForm;