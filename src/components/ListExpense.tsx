const ListExpense = ({ exp }) => {
  return (
    <section>
      {exp.map((item) => (
        <div
          className="grid grid-cols-[5fr_3fr_2fr] border-2 border-gray-400 py-2 my-2 rounded-xl"
          key={item.id}
        >
          <span className="px-4 font-bold mx-auto">{item.title}</span>
          <span className="px-4 font-bold mx-auto">{item.category}</span>
          <span className="px-4 font-bold mx-auto">${item.cost}</span>
        </div>
      ))}
    </section>
  )
}

export default ListExpense
