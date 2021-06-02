import NetflixLogo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <div>
          <div className="lang-select-wrapper">
            <select name="lang" id="lang">
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>
          <a href="/" className="red-btn">
            Sign In
          </a>
        </div>
      </header>
      <div className="cards">
        <h1 className="card-title">Unlimited movies, TV shows and more.</h1>
        <h2 className="card-sub-title">Watch anywhere. Cancel anytime.</h2>
        <form>
          <h3 className="form-title">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
          <button className="btn red-btn">
            <span>Get Started</span>
            <span className="chevron-right-arrow">
              <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                <desc>chevron</desc>
                <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
