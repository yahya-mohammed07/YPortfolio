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
        Over nearly two years, I've embarked on a thrilling journey as a
        developer, creating cutting-edge curated software and doing some data
        scraping. As both an open-source advocate and a proprietary developer,
        I've pushed the boundaries of innovation to new heights!
      </p>
      <div className="flex justify-center gap-1 mt-5">
        <YButton>Resume</YButton>
        <a href="https://github.com/yahya-mohammed07" target="_blank">
          <YButton>
            <FaGithubAlt size={30} />
          </YButton>
        </a>
      </div>
    </div>
  );
};

export default About;
