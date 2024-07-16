import { FaGithubAlt } from "react-icons/fa6";
import YButton from "../Elemets/YButton";
const About = () => {
  return (
    <div className=" text-center max-w-6xl mt-10 mx-auto p-6">
      <p className="text-3xl md:text-7xl p-6 font-medium font-Fredoka text-gray-600">
        Hi, I'm <span className="text-blue-600">Yahya M. Baqer</span>
      </p>
      <p className="text-2xl md:text-4xl p-3 font-mono text-gray-700 font-medium">
        A passionate{" "}
        <span
          className="text-2xl md:text-4xl px-1 font-Titillium font-semibold"
          style={{
            color: "#2F3640",
          }}
        >
          Software Developer
        </span>
        .
      </p>
      <p className=" text-xl md:text-2xl font-Roboto">
        Over the past two years, I've worked as a developer, creating innovative
        software solutions and gaining expertise in data scraping. I've explored
        both open-source and proprietary development. It's been an exciting
        journey, and I look forward to continuing to grow and learn in this
        field.
      </p>
      <div className="flex justify-center gap-1 mt-20">
        <a href="https://github.com/yahya-mohammed07" target="_blank">
          <YButton>
            <FaGithubAlt size={28} />
          </YButton>
        </a>
      </div>
      <p>*CV AVAILABLE AT REQUEST</p>
    </div>
  );
};

export default About;
