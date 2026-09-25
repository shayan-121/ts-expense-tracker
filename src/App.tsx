import AddExpense from './components/AddExpense'
import FilterExpense from './components/FilterExpense'
import ListExpense from './components/ListExpense'
import Totals from './components/Totals'
import { useState } from 'react'

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'coffee',
      category: 'leisure',
      cost: 5.4,
    },
    {
      id: 2,
      title: 'movies',
      category: 'leisure',
      cost: 20.0,
    },
    {
      id: 3,
      title: 'fuel',
      category: 'work',
      cost: 75,
    },
    {
      id: 4,
      title: 'groceries',
      category: 'shopping',
      cost: 35.6,
    },
  ]

  const category = ['leisure', 'work', 'shopping', 'bills']
  const [exp, setExp] = useState(expenses)
  const [selected, setSelected] = useState([])

  return (
    <section className="max-w-app mx-auto flex flex-col">
      <h2 className="py-6 mx-auto">Simple Expense Tracker</h2>
      <p className="py-6 mx-auto">
        This is a simple expense tracker to track your recent expenses
      </p>
      <AddExpense exp={exp} setExp={setExp} />
      <FilterExpense
        exp={exp}
        category={category}
        selected={selected}
        setSelected={setSelected}
      />
      <ListExpense exp={exp} />
      <Totals exp={exp} />
    </section>
  )
}

export default App
