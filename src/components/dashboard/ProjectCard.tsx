import { Project } from "@/utils/types";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/dashboard/${project.id}`}
      // className="bg-gradient-to-r from-[#B86E9F] to-[#523147] rounded-lg p-[1px] w-96 h-56 text-white/80 text-lg font-thin flex flex-col justify-between"
      className="w-96 h-56 bg-[#232323] rounded-lg"
    >
      <div className="h-full rounded-lg p-3 flex flex-col justify-between hover:bg-project-hover bg-project transition-all ease-linear">
        <h1> ⌐◨-◨ {project.name}</h1>
        <h2 className="text-end">{project.chain}</h2>
      </div>
    </Link>
  );
};

export default ProjectCard;

//bg-gradient-to-r from-[#B86E9F] to-[#523147]
