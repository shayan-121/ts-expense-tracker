const AddExpense = ({ exp, setExp }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setExp((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: formData.get('title'),
        category: formData.get('category'),
        cost: Number(formData.get('cost')),
      },
    ])
    form.reset()
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-[4fr_2fr_2fr_1fr_1fr]"
    >
      <input
        name="title"
        className="border-2 border-gray-300 rounded-xl p-2 mx-2"
        type="text"
        placeholder="title"
        required
      />
      <input
        name="date"
        className="border-2 border-gray-300 rounded-xl p-2 mx-2"
        type="date"
        placeholder="date"
      />
      <input
        name="category"
        className="border-2 border-gray-300 rounded-xl p-2 mx-2"
        type="text"
        placeholder="category"
        required
      />
      <input
        name="cost"
        className="border-2 border-gray-300 rounded-xl p-2 mx-2"
        type="number"
        placeholder="cost"
        required
      />
      <button
        type="submit"
        className="bg-secondary border-2 border-primary p-2 rounded-xl hover:bg-primary"
      >
        submit
      </button>
    </form>
  )
}

export default AddExpense
