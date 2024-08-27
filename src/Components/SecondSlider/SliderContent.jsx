
const SliderContent = ({item}) => {
    const {title,subtitle,description,image}=item
  return (
    <div>
        <div className="bg-white shadow-2xl flex-col justify-start items-start">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SliderContent