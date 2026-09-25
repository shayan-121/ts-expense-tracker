const FilterExpense = ({ exp, category, selected, setSelected }) => {
  const handleClick = (e) => {
    e.preventDefault()
    const newValue = e.currentTarget.name
    setSelected((prev) =>
      prev.includes(newValue)
        ? prev.filter((value) => value !== newValue)
        : [...prev, newValue],
    )
  }

  return (
    <div>
      {category.map((each) => (
        <button
          name={each}
          onClick={(e) => handleClick(e)}
          key={each}
          className={`border-2 border-primary mx-2 p-2 my-4 rounded-xl hover:bg-primary ${selected.includes(each) ? 'bg-primary' : 'bg-secondary'}`}
        >
          {each}
        </button>
      ))}
    </div>
  )
}

export default FilterExpense
