import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : [];
  })

  // Save to LocalStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])

  // Add New Expense in Expenses State variable
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense] )
  }

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id != id) )
  }

  const totalExpenses  = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  )
}

export default App
