import LogoHorizontal from "../assets/logo_horizontal.png";
import Happyface from "../assets/happy.png";

const EndSection = () => {
  return (
    <section id="end">
      <div className="resume-section-content">
        <h2 className="mb-5">The End</h2>
        <div className="banner">
          <img src={LogoHorizontal} alt="Logo" />
          <div className="banner-message">
            <img src={Happyface} alt="Happy" />
            <span>Have a nice day</span>
            <img src={Happyface} alt="Happy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
