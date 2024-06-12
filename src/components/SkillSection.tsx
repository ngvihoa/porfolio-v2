import { skillList } from "../lib/data/skills";

const SkillSection = () => {
  return (
    <section id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        {skillList.map((item, _) => (
          <>
            <div className="subheading mb-3">{item.name}</div>
            <ul className="list-inline mb-5">
              {item.list.map((skill, index) => (
                <img
                  key={index + Math.random()}
                  src={skill.src}
                  alt={skill.alt}
                  loading="eager"
                />
              ))}
            </ul>
          </>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
