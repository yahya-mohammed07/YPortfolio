import SkillSpan from "../Elemets/SkillsSpan";

const Skills = () => {
  return (
    <div
      className="grid-cols-1 md:grid-cols-3 text-center max-w-6xl mt-5 mx-auto p-6  justify-center items-center"
      style={{
        display: "grid",
        gap: 5,
      }}
    >
      <SkillSpan>Backend (Express & Flask & CROW)</SkillSpan>
      <SkillSpan>Frontend (React / Typescript)</SkillSpan>
      <SkillSpan>Mobile (Flutter)</SkillSpan>
      <SkillSpan>Database (MySQL & SQlite3 & MongoDB)</SkillSpan>
      <SkillSpan>Data scraper (Python)</SkillSpan>
      <SkillSpan>Translator (En - Ar)</SkillSpan>
    </div>
  );
};

export default Skills;
