import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import EndSection from "./EndSection";
import ExperienceSection from "./ExperienceSection";
import InterestSection from "./InterestSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

const PageContent = () => {
  return (
    <div
      id="page-content"
      className="absolute top-0 right-0 w-full md:w-[calc(100%-300px)] pt-20 md:pt-0"
    >
      {/* <!-- About--> */}
      <AboutSection />
      <hr />
      {/* <!-- Education--> */}
      <EducationSection />
      <hr />
      {/* <!-- Experience--> */}
      <ExperienceSection />
      <hr />
      {/* <!-- My Projects --> */}
      <ProjectSection />
      <hr />
      {/* <!-- Skills--> */}
      <SkillSection />
      <hr />
      {/* <!-- Interests--> */}
      <InterestSection />
      <hr />
      {/* <!-- The end --> */}
      <EndSection />
    </div>
  );
};

export default PageContent;
