const TeamCard = ({ team }) => {
  const { name, image, description, position, socialMedia } = team;
  return (
    <div className="card shadow-xl shadow-regal-blue rounded-none w-full">
      <figure>
        <img src={image} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body  text-white">
        <div>
          <h2 className="card-title ">{name}</h2>
          <p>{position}</p>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {socialMedia?.map((socialLink, index) => {
            return (
              <a
                key={index}
                href={socialLink?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:text-light-blue font-bold"
              >
                <socialLink.Icon size={28} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
