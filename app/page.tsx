import ExpenseList from '@/app/pense_Components/ExpenseList/expenseList'
import blog from '@/app/blog/page'

export default function Expense() {
  return (
    <div>
        <h1 className="text-5xl text-center m-5">Expense Tracker App</h1>   
        <ExpenseList />
        <hr />
    <div>  <a href='/blog' className='text-4xl text-blue-700'>Check Blog Website</a></div>
    </div> 
  ) 
} 