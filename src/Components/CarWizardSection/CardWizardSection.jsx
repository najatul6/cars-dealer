import { FaCarSide } from "react-icons/fa6";
import img from "../../assets/image/3.jpg";
const CardWizardSection = () => {
  return (
    <div className="flex justify-center items-center bg-regal-blue">
      <section
        className="py-20 px-10 bg-regal-blue text-white flex flex-col gap-4 justify-center items-start w-full bg-blend-multiply "
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
        <button className="btn text-white">Find your dream car &#10149;</button>
      </section>
      <section className="py-10 px-5 flex flex-col justify-start items-start">
        <FaCarSide />
        <h1>sell your car easily</h1>
        <p>request a quote for your car.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          omnis cumque exercitationem eveniet? Adipisci enim, maiores illum
          provident deserunt autem dolorem eveniet? Illum minima harum, totam
          non voluptatibus modi quidem!
        </p>
        <button>sell you car</button>
      </section>
    </div>
  );
};

export default CardWizardSection;
