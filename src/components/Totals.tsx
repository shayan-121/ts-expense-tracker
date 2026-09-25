const Totals = ({ exp }) => {
  const sum = exp.reduce((acc, curr) => acc + curr.cost, 0)
  return <div className="font-bold mx-auto text-xl">Total: ${sum}</div>
}

export default Totals
