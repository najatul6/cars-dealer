import PropTypes from "prop-types";

const FinanceCard = ({ item }) => {
  return (
    <div className="border py-5 text-white flex flex-col flex-shrink-0 ">
      <p className="text-3xl text-center font-bold pb-5">{item?.name}</p>
      <hr className="w-full" />
      <div className="text-center py-5 px-4 flex flex-col justify-center items-center gap-6 flex-grow">
        <div>
          <h1 className="text-5xl">${item?.price}</h1>
          <p>/{item?.billingCycle}</p>
        </div>
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
      <div className="flex justify-center items-center">
        <button className="py-3 btn bg-transparent border-light-blue text-white hover:bg-light-blue transition-colors duration-300">Apply Now &#10149;</button>
      </div>
    </div>
  );
};

FinanceCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FinanceCard;
