import React, { useState } from 'react';

interface TaskFormProps {
    onAddTask: (title: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (inputValue.trim() === '') return;
        onAddTask(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Type your task...' className='flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500' name="" id="" />
            <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 tansition-colors'>Adicionar</button>
        </form>
    );
};

export default TaskForm;