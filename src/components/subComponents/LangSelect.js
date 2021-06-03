const LangSelect = () => {
  return (
    <div className="lang-select-wrapper">
      <select className="lang-select" name="lang" id="lang">
        <option value="english">English</option>
        <option value="hindi">हिन्दी</option>
      </select>
    </div>
  );
};

export default LangSelect;
