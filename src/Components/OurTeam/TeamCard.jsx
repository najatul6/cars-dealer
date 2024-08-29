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
          {socialMedia?.map((socialLink, index) => {
            return (
              <a
                key={index}
                href={socialLink?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-light-blue font-bold"
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
    team: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      socialMedia: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          Icon: PropTypes.func.isRequired,
        })
      ),
    }).isRequired,
};

export default TeamCard;
