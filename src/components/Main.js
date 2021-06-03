import AnimationCard from './subComponents/AnimationCard';
import FAQ from './subComponents/FAQ';

const Main = () => {
  return (
    <div className="main-content">
      <section className="enjoy-on-tv-section">
        <AnimationCard
          title="Enjoy on your TV."
          subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          image="tv.png"
          imageAlt="tv"
        />
      </section>
      <section className="download-your-shows-section">
        <AnimationCard
          title="Download your shows to watch offline."
          subtitle="Save your favourites easily and always have something to watch."
          image="mobile.png"
          imageAlt="mobile"
        />
      </section>
      <section className="watch-everywhere-section">
        <AnimationCard
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image="device-pile-in.png"
          imageAlt="device pile in"
        />
      </section>
      <section className="children-section">
        <AnimationCard
          title="Create profiles for children."
          subtitle="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image="children.png"
          imageAlt="children"
        />
      </section>
      <section className="faq-section">
        <FAQ />
      </section>
    </div>
  );
};

export default Main;
