const EducationSection = () => {
  return (
    <section id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="education-container">
          <div className="education-info">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  VNU - Ho Chi Minh City University of Technology
                </h3>
                <div className="subheading">Bachelor of Computer Science</div>
              </div>
              <div className="md:text-right">
                <span className="text-primary-1">
                  September 2020 - November 2024
                </span>
                <div className="text-primary-1">Expected</div>
              </div>
            </div>
            <div className="info-description">
              <div>Senior undergraduate</div>
              <p>GPA: 8.26/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
