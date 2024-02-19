import SkillSpan from "../Elemets/SkillsSpan";

const Skills = () => {
  return (
    <div
      className="text-center max-w-6xl mt-5 mx-auto p-6  justify-center items-center"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 5,
      }}
    >
      <SkillSpan>Backend (Express & Flask & CROW)</SkillSpan>
      <SkillSpan>Frontend (React / Typescript)</SkillSpan>
      <SkillSpan>Data scraping (Python)</SkillSpan>
      <SkillSpan>Mobile (Flutter)</SkillSpan>
      <SkillSpan>Database (MySQL & SQlite3 & MongoDB)</SkillSpan>
      <SkillSpan>Translator (En - Ar)</SkillSpan>
    </div>
  );
};

export default Skills;
