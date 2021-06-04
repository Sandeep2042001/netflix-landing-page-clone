const FAQ = () => {
  const handleClick = (e) => {
    e.target.classList.toggle('active');

    // let activeAccordions = document.querySelectorAll('.accordion.active');
    // activeAccordions.forEach((acc) => {
    //   acc.nextElementSibling.style.maxHeight = null;
    // });

    let panel = e.target.nextElementSibling;

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      panel.style.maxHeight = null;
      e.target.style.marginBottom = '8px';
    } else {
      panel.style.display = 'block';
      panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.marginBottom = '8px';
      e.target.style.marginBottom = '1px';
    }
  };

  return (
    <div className="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="qna">
        <button onClick={(e) => handleClick(e)} className="accordion">
          What is Netflix?
        </button>
        <div className="panel">
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          How much does Netflix cost?
        </button>
        <div className="panel">
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            199 to ₹ 799 a month. No extra costs, no contracts.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          Where can I watch?
        </button>
        <div className="panel">
          <p>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles.
            <br />
            <br />
            You can also download your favourite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          How do I cancel?
        </button>
        <div className="panel">
          <p>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          What can I watch on Netflix?
        </button>
        <div className="panel">
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </div>
        <button onClick={(e) => handleClick(e)} className="accordion">
          Is Netflix good for kids?
        </button>
        <div className="panel">
          <p>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
