import React, { useState, useRef } from 'react';
import Button from '../CommonComponent/Button';
import { utils, writeFile } from 'xlsx';
import { TbGridDots } from "react-icons/tb";


const DragandDrop = () => {
    const [people, setPeople] = useState([
        { id: 1, name: 'John Doe', phone: 12367983474, sets: '3x10' },
        { id: 2, name: 'Max Walters', phone: 12367983474, sets: '3x10' },
        { id: 3, name: 'Adam Smith', phone: 12367983474, sets: '3x10' },
        { id: 4, name: 'Tom Johnson', phone: 12367983474, sets: '3x10' },
    ]);
    const [dragging, setDragging] = useState(false);

    const dragPerson = useRef(null);
    const draggedOverPerson = useRef(null);

    const handleSort = () => {
        const peopleClone = [...people];
        const dragIndex = dragPerson.current;
        const dragOverIndex = draggedOverPerson.current;

        if (dragIndex !== null && dragOverIndex !== null && dragIndex !== dragOverIndex) {
            const temp = peopleClone[dragIndex];
            peopleClone[dragIndex] = peopleClone[dragOverIndex];
            peopleClone[dragOverIndex] = temp;
            setPeople(peopleClone);
        }

        dragPerson.current = null;
        draggedOverPerson.current = null;
        setDragging(false);
    };

    const handleExport = () => {
        const wb = utils.book_new();
        const ws = utils.json_to_sheet(people);
        utils.book_append_sheet(wb, ws, "Mysheet");
        writeFile(wb, "MyExcel.xlsx");
    };

    const handleDragStart = (index) => {
        if (dragging) {
            dragPerson.current = index;
        }
    };

    const handleDragEnter = (index) => {
        if (dragging) {
            draggedOverPerson.current = index;
        }
    };

    return (
        <div className='h-[100%] pt-10 mx-6'>
            <table className='pt-2 min-w-[100%] rounded-full'>
                <thead>
                    <tr className='text-[16px] text-gray-700 bg-[#e8ebf6] dark:bg-gray-300'>
                        <th className='p-2 border-b slate-400 rounded-tl-lg'>ID</th>
                        <th className='p-2 border-b slate-400'>Name</th>
                        <th className='p-2 border-b slate-400'>Phone</th>
                        <th className='p-2 border-b text-left slate-400 rounded-tr-lg'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr
                            className='text-[16px] text-gray-700 dark:text-gray-400'
                            key={index}
                            draggable={dragging}
                            onDragStart={() => handleDragStart(index)}
                            onDragEnter={() => handleDragEnter(index)}
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <td className='text-center p-3 border-b border-slate-300 dark:border-slate-600'>{person.id}</td>
                            <td className='text-center p-3 border-b border-slate-300 dark:border-slate-600'>{person.name}</td>
                            <td className='text-center p-3 border-b border-slate-300 dark:border-slate-600'>{person.phone}</td>
                            <td className='text-center p-3  border-b border-slate-300 dark:border-slate-600'>

                                <TbGridDots
                                    onMouseDown={() => setDragging(true)}
                                    onMouseUp={() => setDragging(false)} />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-end pt-4 p-3'>
                
                <Button onClick={handleExport}

                    className={"px-6  py-2 mt-3 rounded-lg text-white hover:text-white dark:hover:border-blue-600 border-blue-600 border hover:bg-blue-600 dark:border-secondary"} >
                    Export
                </Button>
            </div>
        </div>
    );
};

export default DragandDrop;
