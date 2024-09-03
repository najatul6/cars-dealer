const FinanceCard = ({ item }) => {
  return (
    <div className="border rounded-xl text-white ">
        <p className="text-3xl text-center font-bold pb-5">{item?.name}</p>
        <hr className="w-full" />
      <div className="text-center py-5 px-4 flex flex-col justify-center items-center gap-6">
        <h1 className="text-5xl">${item?.price}</h1>
        <p>/{item?.billingCycle}</p>
        <div className="flex gap-4 flex-col justify-center items-center">
          <p className="flex flex-col justify-center items-start">
            <span>Features:</span>
            {item?.features?.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </p>
          <p>{item?.additionalInfo} </p>
        </div>
      </div>
        <button className="py-3 btn w-full">Apply Now &#10149;</button>
    </div>
  );
};

export default FinanceCard;
