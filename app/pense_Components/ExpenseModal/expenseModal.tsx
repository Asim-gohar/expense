'use client'

import { penseType, OnAddHandlerType, AgbModalType, penseModalProps } from '@/app/Component/pageTypes/pageTypes'
import React, { useState } from 'react';
import AgbList from '../ExpenseList/expenseList'
import { RxCross2 } from "react-icons/rx";

export default function AgbModal({ isOpen, onClose, onAddPense, onUpdatePense, pense }: penseModalProps) {
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const categories = ['Housing', 'Transportation', 'Insurance', 'Food', 'Clothing', 'Health', 'Education']

    function handleAddPense() {
        const newPense = {
            id: `${Date.now()}`,
            amount,
            category,
            note,
            date
        }
        onAddPense(newPense);
        setAmount(0);
        setCategory('');
        setDate('');
        setNote('');
        onClose()
    }
    const handleUpdatePense = () => {
        const updateExpense: penseType = {
            id: pense.id,
            amount: amount || pense.amount,
            category: category || pense.category,
            note: note || pense.note,
            date: date || pense.date,
        };

        onUpdatePense(updateExpense);
        setAmount(0);
        setCategory('');
        setDate('');
        setNote('');
        onClose();
    }
    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
                <div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg">
                    <div className="mb-4">
                        <div className='flex justify-between'>
                            <h3 className="text-2xl font-semibold mb-2">Add Expense</h3>
                            <button onClick={onClose}>
                                <RxCross2 className="text-2xl text-red-500 hover:text-green-700" />
                            </button>
                            {/* <button onClick={onClose}>
                        <FaTimes className="text-3xl text-red-500 hover:text-gray-700 cursor-pointer" />
                    </button> */}
                        </div>


                        <label className="block text-gray-600 text-sm mb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            // value={amount || expense.amount}
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="w-full border p-2 mb-2"
                        />

                        <label className="block text-gray-600 text-sm mb-2" htmlFor="category">
                            Category
                        </label>



                        <select
                            id="category"
                            value={category} // Assuming category is the selected category in your state
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border p-2 mb-2"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        {/* <option value="" disabled>Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))} */}
                        {/* </select> */}

                        <label className="block text-gray-600 text-sm mb-2" htmlFor="note">
                            Note
                        </label>
                        <textarea
                            id="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-full border p-2 mb-2"
                        />

                        <label className="block text-gray-600 text-sm mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border p-2 mb-4"
                        />
                    </div>
                    

                    <div className="flex justify-end">
                        {pense.id !== '' ?
                            <button
                                onClick={handleUpdatePense}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                update Expense
                            </button>

                            :
                            <button
                                onClick={handleAddPense}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Add Expense
                            </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
};


