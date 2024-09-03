const FinanceCard = ({ item }) => {
  return (
    <div className="border rounded-xl py-5">
     <div>
     <p className="text-3xl text-center font-bold pb-5">{item?.name}</p>
      <hr className="w-full" />
      <h1>${item?.price}</h1>
      <p>/{item?.billingCycle}</p>
      <div>
        <p>
          <span>Features:</span>
          {item?.features?.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </p>
        <p>{item?.additionalInfo} </p>
      </div>
      <button>
        Apply Now &#10149;
      </button>
     </div>
    </div>
  );
};

export default FinanceCard;
