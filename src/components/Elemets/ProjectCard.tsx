import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import React, { ReactNode } from "react";

interface ProjectCardType {
  openSource: boolean;
  hasWebsite: boolean;
  githubLink: string;
  websiteLink: string;
  description: string;
  tech: ReactNode;
  title: string;
}

const ProjectCard: React.FC<ProjectCardType> = ({
  hasWebsite,
  openSource,
  githubLink,
  websiteLink,
  description,
  tech,
  title,
}) => {
  return (
    <div
      className="border hover:-translate-y-2 transition duration-500 min-h-72 overflow-auto"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
      }}
    >
      <div className="font-bold font-Nunito text-xl md:text-xl p-3">
        {title}
      </div>
      <div className="p-6 font-Fredoka font-normal">{description}</div>
      <div className="text-sm md:text-md font-medium">{tech}</div>
      <div className="flex justify-evenly gap-1 p-4">
        {hasWebsite && (
          <a href={websiteLink} target="_blank">
            <button className="border p-2 rounded-full hover:bg-lime-100">
              <FaExternalLinkAlt size={23} />
            </button>
          </a>
        )}
        {openSource && (
          <a href={githubLink} target="_blank">
            <button className="border p-2 rounded-full hover:bg-lime-100">
              <FaGithub size={25} />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
