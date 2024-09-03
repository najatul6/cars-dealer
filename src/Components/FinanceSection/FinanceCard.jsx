const FinanceCard = ({ item }) => {
  return (
    <div>
      <p>{item?.name}</p>
      <h1>${item?.price}</h1>
      <p>/{item?.billingCycle}</p>
      <div>
        <p>
          <span>Features:</span>
          {item?.features?.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </p>
        <p>{item?.additionalInfo}</p>
      </div>
      <button>
        Apply Now &
      </button>
    </div>
  );
};

export default FinanceCard;
