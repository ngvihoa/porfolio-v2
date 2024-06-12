import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMap } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { styleIcon } from "../lib/data/motion.config";

const styleIconSubheading = {
  width: 32,
  height: 32,
  color: "#00bf63",
  display: "inline-block",
};

const AboutSection = () => {
  return (
    <section id="about">
      <div>
        <h1 className="mb-0">
          <span className="text-primary-1">Nguyễn Viết</span> Hòa
        </h1>
        <h3 className="mb-0">
          <span className="text-primary-1">Harry</span> Nguyen
        </h3>
        <div className="subheading">
          <RiReactjsLine style={styleIconSubheading} />· Front-end Developer
        </div>
        <div className="subheading mb-5">
          <IoMdMap style={styleIconSubheading} />· Nguyen Huu Tien · Tan Phu,
          HCMC · 0983786674 ·{" "}
          <a href="mailto:nvhoa29702@gmail.com" className="text-primary-1">
            nvhoa29702@gmail.com
          </a>
        </div>
        <p className="lead">
          I am a senior undergraduate in computer science. I am looking for an
          internship/fresher opportunity to help me grow my skills and
          experience in the field of software engineering and web development.
        </p>
        <p className="lead mb-5">
          Now, I'm a{" "}
          <a href="#skills" className="text-primary-1">
            React
          </a>{" "}
          Front-end web developer. However, my objective is to become a
          Full-stack developer who can work on both Front-end and Back-end. I'm
          currently start learning Back-end with NodeJs and ExpressJs. I hope I
          can build my own full-stack software soon :D.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/nvhoa29b02/"
            target="_blank"
          >
            <FaLinkedinIn style={styleIcon} />
          </a>
          <a
            className="social-icon"
            href="https://github.com/ngvihoa"
            target="_blank"
          >
            <FaGithub style={styleIcon} />
          </a>
          <a className="social-icon" href="#">
            <FaXTwitter style={styleIcon} />
          </a>
          <a className="social-icon" href="#">
            <FaFacebookF style={styleIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
