import { FaArrowRightFromBracket } from "react-icons/fa6";
import { styleIcon } from "../lib/data/motion.config";
import Button from "../ui/Button";

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="experience-container">
          <div className="exp-info">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  Truong Minh Thinh Technology Joint Stock Company
                </h3>
                <div className="subheading">Front-end Intern</div>
              </div>
              <div className="md:text-right">
                <div className="text-primary-1">June 2023 - August 2023</div>
                <div className="text-primary-1 text-right">Full time</div>
              </div>
            </div>
            <div className="info-description pl-4">
              <li>
                Learn Webpack and set up a Webpack folder structure with SCSS,
                TailwindCSS, and custom Font.
              </li>
              <li>
                Implement the web UI from Figma designs with Webpack folder
                structure (2 projects).
              </li>
              <li>
                Learn Angular 15 and convert a project from a Webpack folder
                structure to Angular (Basic level - Fitness website).
              </li>
              <li>
                Achieved:
                <ul>
                  <li>
                    - Had access to the business’s professional working
                    environment.
                  </li>
                  <li>
                    - Approached new technologies/libraries like Webpack,
                    Angular framework, SlickJs, and TailwindCSS.
                  </li>
                </ul>
              </li>
            </div>
            <Button style="w-fit mt-5 button-style">
              <a
                href="https://github.com/orgs/tmt-technology-jsc-frontend-internship/repositories"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <span>Check it out</span>
                <FaArrowRightFromBracket style={styleIcon} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
