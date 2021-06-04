import strangerThings from '../../assets/boxshot.png';

const AnimationCard = ({
  title,
  subtitle,
  image,
  imageAlt,
  videoTv,
  videoDevicePile,
  downloadIcon
}) => {
  return (
    <div className="animation-card">
      <div className="animation-card-text-wrapper">
        <h1 className="animation-card-title">{title}</h1>
        <h2 className="animation-card-sub-title">{subtitle}</h2>
      </div>
      <div className="animation-card-image-wrapper">
        <img className="animation-card-image" src={image} alt={imageAlt} />
        <div className="animation">
          {videoTv && (
            <video
              className="animation-card-video video-tv"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src={videoTv} type="video/mp4" />
            </video>
          )}
          {downloadIcon && (
            <div className="animation-card-icon-wrapper">
              <div className="animation-card-icon">
                <div className="animation-card-icon-image-wrapper">
                  <img
                    className="animation-card-icon-image"
                    src={strangerThings}
                    alt="stranger things"
                  />
                </div>
                <div className="animation-card-icon-text-wrapper">
                  <div className="animation-card-icon-text-st">
                    Stranger Things
                  </div>
                  <div className="animation-card-icon-text-d">
                    Downloading...
                  </div>
                </div>
                <div className="animation-card-icon-icon-wrapper">
                  <img
                    className="animation-card-icon-icon-gif"
                    src={downloadIcon}
                    alt="download animation"
                  />
                </div>
              </div>
            </div>
          )}
          {videoDevicePile && (
            <video
              className="animation-card-video video-device-pile"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src={videoDevicePile} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;
