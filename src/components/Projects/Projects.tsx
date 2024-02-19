import ProjectCard from "../Elemets/ProjectCard";

const Projects = () => {
  return (
    <div
      className="text-center max-w-6xl mt-5 mx-auto p-6  justify-center items-center"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 5,
      }}
    >
      <ProjectCard
        hasWebsite={true}
        websiteLink={"https://wellix.onrender.com/"}
        openSource={false}
        githubLink=""
      />
      <ProjectCard
        hasWebsite={false}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/Kraken"}
      />
      <ProjectCard
        hasWebsite={true}
        websiteLink={"https://appgallery.huawei.com/app/C109704183"}
        openSource={false}
        githubLink={""}
      />
      <ProjectCard
        hasWebsite={false}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/Kraken"}
      />
      <ProjectCard
        hasWebsite={false}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/Kraken"}
      />
    </div>
  );
};

export default Projects;
