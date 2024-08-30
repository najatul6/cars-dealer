import PropTypes from "prop-types";

const TeamCard = ({ team }) => {
  const { name, image, description, position, socialMedia } = team;
  return (
    <div className="card shadow-2xl rounded-none w-full">
      <figure>
        <img src={image} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body text-white">
        <div className=" border-l-4 rounded border-light-blue px-2">
          <h2 className="card-title ">{name}</h2>
          <p className="text-base">{position}</p>
        </div>
        <p className="my-5">{description}</p>
        <div className="card-actions">
          {socialMedia?.map((socialLink) => {
            return (
              
              <a
                key={socialLink?.id}
                href={socialLink?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-light-blue font-bold cursor-pointer"
              >
                <socialLink.Icon size={20} />
              </a>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  team:PropTypes.any

};

export default TeamCard;
