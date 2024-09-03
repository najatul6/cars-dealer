import img from "../../assets/image/3.jpg";
import img2 from "../../assets/cars/car1.png";
const CardWizardSection = () => {
  return (
    <div className="flex justify-center items-center ">
      <section
        className="py-20 px-10 bg-regal-blue border text-white flex flex-col gap-4 justify-center items-start w-full bg-blend-multiply "
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl font-bold">Are you looking for a Car?</h1>
        <p className="uppercase">car wizard is here to help you.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
          aliquam ex molestias itaque perferendis suscipit laboriosam? Iure
          suscipit, ratione in eaque deleniti rem dolore nemo tempora, amet ipsa
          impedit rerum.
        </p>
        <button className="btn text-white uppercase">
          Find your dream car &#10149;
        </button>
      </section>
      <section className="py-20 px-10 flex flex-col justify-center items-start gap-4 bg-regal-blue">

          <div className="w-[150px]">
            <img src={img2} alt="Car icon" />
          </div>
          <h1 className="text-3xl font-bold">sell your car easily</h1>
          <p className="uppercase">request a quote for your car.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis omnis cumque exercitationem eveniet? Adipisci enim,
            maiores illum provident deserunt autem dolorem eveniet? Illum minima
            harum, totam non voluptatibus modi quidem!
          </p>
          <button className="btn text-white uppercase">
            sell you car &#10149;
          </button>
      </section>
    </div>
  );
};

export default CardWizardSection;
