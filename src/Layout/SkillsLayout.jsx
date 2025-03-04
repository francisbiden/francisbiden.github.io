import SkillsDetails from "../Components/SkillsDetails";

const SkillsLayout = () => {
  return (
   <div className="skill">
               <h2 className="skill-title">My Skills</h2>

     <div className="skills">
      {SkillsDetails.map((SkillsDetail) => (
        <div key={SkillsDetail.id} className="skills-card">
          <h3 className="header">{SkillsDetail.name}</h3>
          <p className="paragraph">{SkillsDetail.description}</p>
        </div>
      ))}
    </div>
   </div>
  );
};

export default SkillsLayout;
