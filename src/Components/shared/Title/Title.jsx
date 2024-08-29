import PropTypes from "prop-types";
const Title = ({text}) => {
  return (
    <div className="flex  flex-col justify-center items-center gap-2 py-5">
        <h1 className="text-3xl font-bold text-center text-white capitalize">{text}</h1>
        <hr className="h-1 w-14 bg-light-blue rounded-xl border-none"/>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string,
}

export default Title