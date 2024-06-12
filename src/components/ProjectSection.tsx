import { FaArrowRightFromBracket } from "react-icons/fa6";
import Button from "../ui/Button";
import { styleIcon } from "../lib/data/motion.config";

const ProjectSection = () => {
  return (
    <section id="project">
      <div className="resume-section-content">
        <h2 className="mb-5">My Projects</h2>
        <div className="project-container">
          <div className="exp-info">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <div className="flex-grow-1">
                <h3 className="mb-0">PakiSlot</h3>
                <div className="subheading">Parking lot management system</div>
              </div>
              <div className="md:text-right">
                <div className="text-primary-1">October 2023 - May 2024</div>
                <div className="text-primary-1 text-right">
                  Capstone project
                </div>
              </div>
            </div>
            <div className="info-description pl-4">
              <li>Member(s): 3.</li>
              <li>Position: Frontend web developer.</li>
              <li>
                Role:
                <ul>
                  <li>
                    - Analyse the system requirements and workflows for main use
                    cases.
                  </li>
                  <li>- Design web and mobile UI with Figma.</li>
                  <li>
                    - Implement the dashboard web for manager and employees with
                    Next.js (App router).
                  </li>
                  <li>
                    - Implement hardware simulator for license plate recognizer
                    (ANPR).
                  </li>
                </ul>
              </li>
              <li>
                Main features:
                <ul>
                  <li>
                    - Managing (CRUD) employee accounts, vehicle types,
                    services, and customer feedback.
                  </li>
                  <li>
                    - Customizing the parking map and handling service bookings
                    from customers.
                  </li>
                  <li>- Managing checking in/out process.</li>
                </ul>
              </li>
              <li>
                Other skills: TypeScript, TailwindCss, Redux-toolkit, Git.
              </li>
            </div>
            <Button style="w-fit mt-5 button-style">
              <a
                href="https://github.com/capstone-k20-219/capstone-k20-219-frontend-web"
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

export default ProjectSection;
