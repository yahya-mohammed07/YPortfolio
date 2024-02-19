import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import WellixPng from "../../assets/Wellix.png";
import React from "react";

interface ProjectCardType {
  openSource: boolean;
  hasWebsite: boolean;
  githubLink: string;
  websiteLink: string;
}

const ProjectCard: React.FC<ProjectCardType> = ({
  hasWebsite,
  openSource,
  githubLink,
  websiteLink,
}) => {
  return (
    <span className="border hover:-translate-y-2 transition duration-500">
      <div className="p-3">
        <img src={WellixPng} alt="wellix web" />
      </div>
      <div className="flex justify-evenly gap-1 p-4">
        {hasWebsite && (
          <a href={websiteLink} target="_blank">
            <button className="border p-2 rounded-full hover:bg-lime-100">
              <FaExternalLinkAlt size={25} />
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
    </span>
  );
};

export default ProjectCard;
