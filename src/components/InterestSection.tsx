import { interestList } from "../lib/data/interest";

const InterestSection = () => {
  return (
    <section id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <div className="img-container">
          {interestList.map((item, _) => (
            <img
              src={item.src}
              alt={item.alt}
              loading="eager"
              className="h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestSection;
