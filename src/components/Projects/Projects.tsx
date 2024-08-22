import ProjectCard from "../Elemets/ProjectCard";

const Projects = () => {
  return (
    <div
      className="grid-cols-1 md:grid-cols-3 text-center max-w-6xl mt-5 sm:mx-auto mx-5 justify-center items-center"
      style={{
        display: "grid",
        gap: 5,
      }}
    >
      <ProjectCard
        title="Al-Kfaat For Private Tutoring"
        hasWebsite={true}
        websiteLink={"https://al-kfaat.netlify.app"}
        openSource={false}
        githubLink=""
        description="Private Educational Institute"
        tech={
          <div className="flex justify-evenly p-2">
            <span>React (Ts)</span>
            <span>TailwindCSS</span>
            <span>Framer Motion</span>
            <span>Database</span>
          </div>
        }
      />
      <ProjectCard
        title="Wellix"
        hasWebsite={true}
        websiteLink={"https://wellix.onrender.com/"}
        openSource={false}
        githubLink=""
        description="A medical website that provides a minimal user interface and user experience to use extremely useful medical tools"
        tech={
          <div className="flex justify-evenly p-2">
            <span>React (Ts)</span>
            <span>FastAPI (Python)</span>
            <span>TailwindCSS</span>
          </div>
        }
      />
      <ProjectCard
        title="YPortfolio"
        hasWebsite={true}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/portfolio"}
        description="You're looking at it :>)"
        tech={
          <div className="flex justify-evenly p-2">
            <span>React (Ts)</span>
            <span>TailwindCSS</span>
          </div>
        }
      />
      <ProjectCard
        title="Kraken"
        hasWebsite={false}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/Kraken"}
        description="An open-source modern math library that comes with a fast-fixed matrix class and math-related functions."
        tech={
          <div className="flex justify-evenly p-2">
            <span>C++20</span>
            <span>CMake</span>
            <span>Math</span>
          </div>
        }
      />
      <ProjectCard
        title="Iris"
        hasWebsite={false}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/Iris"}
        description="A little medical Chat-bot I used as a additional tool in our graduation project!."
        tech={
          <div className="flex justify-evenly p-2">
            <span>Flask</span>
            <span>C++</span>
            <span>Jinja</span>
            <span>HTML & CSS & JS</span>
            <span>ML</span>
            <span>Math</span>
          </div>
        }
      />
      <ProjectCard
        title="Adhkar"
        hasWebsite={true}
        websiteLink={"https://appgallery.huawei.com/app/C109704183"}
        openSource={false}
        githubLink={""}
        description="Remembrances and supplications from legal papers in one place"
        tech={
          <div className="flex justify-evenly p-2">
            <span>Flutter</span>
            <span>Dart</span>
            <span>SQLite</span>
          </div>
        }
      />
      <ProjectCard
        title="SpaceInvaderS"
        hasWebsite={false}
        websiteLink={""}
        openSource={true}
        githubLink={"https://github.com/yahya-mohammed07/SpaceInvaderS"}
        description="A little game that i made at the beginning of my programming journey. gonna optimize it one day"
        tech={
          <div className="flex justify-evenly p-2">
            <span>C++</span>
            <span>SFML</span>
          </div>
        }
      />
    </div>
  );
};

export default Projects;
