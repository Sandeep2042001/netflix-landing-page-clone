const AnimationCard = ({ title, subtitle, image, imageAlt }) => {
  return (
    <div className="animation-card">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className="card-image">
        <img src={`../assets/${image}`} alt={imageAlt} />
        <div className="animation"></div>
      </div>
    </div>
  );
};

export default AnimationCard;
