
const FinanceCard = ({item}) => {
  return (
    <div>
            <p>{item?.name}</p>
            <h1>${item?.price}</h1>
            <p>/{item?.billingCycle}</p>
            <div>
                {item?.features?.map((task,idx)=><li key={idx}>{task}</li>)}
            </div>
    </div>
  )
}

export default FinanceCard