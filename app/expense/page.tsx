import ExpenseList from '@/app/pense_Components/ExpenseList/expenseList'
import blog from '@/app/blog/page'

export default function Expense() {
  return (
    <main>
      <div>
        <h1 className="text-5xl text-center m-5">Expense Tracker App</h1>
        <ExpenseList /> 
      </div>
    </main>
  )
}   