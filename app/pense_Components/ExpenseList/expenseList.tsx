'use client'
import React from 'react'
import { useState } from 'react';
import { MdLibraryAdd } from "react-icons/md";
import { OnAddHandlerType, penseType } from '@/app/Component/pageTypes/pageTypes';
import AgbModal from '../ExpenseModal/expenseModal';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function AgbList() {
  const [penses, setPenses] = useState<penseType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [total , setTotal] = useState<number>(0)
  const [pense, setpense] = useState<penseType>({
    id: '',
    amount: 0,
    category: '',
    note: '',
    date: ''
  })
  const onAddPense = (pense: penseType) => {
    setPenses([...penses, pense])
    setIsOpen(true)
    setTotal(total + pense.amount)
  }
  // const onDeleteHandler = (penses:penseType) => {
  //   const filterdExpenses:penseType[] = penses.filter((e: { id: string; })=> e.id !== pense.id)
  //   setpenses(filterdExpenses);

  // }
  const onClose = () => {
    setIsOpen(false);
    setpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })

  }
  function onDeleteHandler (pense:penseType):void {
      const filteredArray: penseType[] = penses.filter((e: penseType) => e.id !== pense.id);
      setPenses(filteredArray);
      setTotal(total - pense.amount)
    }

    function onEditHandler (pense: penseType): void{
      setpense(pense)
      setIsOpen(true);
    }
    const onUpdatePense = (expenseRecord: penseType) => {
      setPenses(penses.map((e) => (e.id === expenseRecord.id ? expenseRecord : e)));
      setTotal(total - pense.amount + expenseRecord.amount);
      setpense({
        id: '',
        amount: 0,
        category: '',
        note: '',
        date: ''
      })
    }

  return (
    <main>
      <div className='flex justify-between pt-1 m-4'>
        <h2 className='font-semibold text-xl ml-14'> Expense List</h2>
        <button className='flex justify-center bg-green-500 items-center mr-7 rounded p-1 hover:bg-yellow-500' onClick={() => setIsOpen(true)}>
          <MdLibraryAdd className='mr-1' />Add Expense
        </button>
      </div>
      <AgbModal isOpen={isOpen} onAddPense={onAddPense} onClose={onClose} pense={pense} onUpdatePense={onUpdatePense} />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Note</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className='flex pl-28 text-lg'>Actions</th>
          </tr>
        </thead>
        <hr />
        <tbody className='pt-2'>
          {penses.length > 0 ?
            penses.map((pense) => (
              <tr className="hover:bg-gray-50 text-center" key={pense.id}>
                <th className="py-2 px-4 border-b">{pense.id}</th>
                <th className="py-2 px-4 border-b">{pense.amount}</th>
                <th className="py-2 px-4 border-b">{pense.category}</th>
                <th className="py-2 px-4 border-b">{pense.note}</th>
                <th className="py-2 px-4 border-b">{pense.date}</th>
                <th className='border-r border-gray-300'>
                <button className='bg-blue-700 rounded-2xl px-2 py-3' onClick={()=> onEditHandler(pense)}>Edit</button>
                <button className='bg-red-700 rounded-2xl px-2 py-3' onClick={()=> onDeleteHandler(pense)}>Delete</button>
                  
                </th>
              </tr>
            ))
            :
            <tr>
              <td colSpan={6} className='text-center'>Expenses not found!</td>
            </tr>
          }
        </tbody>
      </table>

      <div className="flex justify-end">
        <p className="text-2xl font-semibold mb-4">Total: PKR{total.toFixed(2)}</p>
      </div>
      <div className={isOpen ? 'hidden' : 'show '}>
        <BarChart width={500} height={300} data={penses} className='bg-black b'>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="category" stroke="#fff" tick={{ fill: '#fff', fontWeight: 'bold' }} />
          <YAxis stroke="#fff" tick={{ fill: '#fff', fontWeight: 'bold' }} />
          <Bar type="monotone" dataKey="amount" fill="#8aff8a" />
        </BarChart>
      </div>
    </main>
  )
}
//flex justify-center items-center mb-2 bg-green-500 rounded p-1
