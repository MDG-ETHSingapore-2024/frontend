import { Project } from "@/utils/types";
import ProjectCard from "./ProjectCard";

import { PaginationView } from "./PagtinationView";
import { useEffect, useState } from "react";
import CreateProjectModal from "./CreateProjectModal";
const ProjectView = ({
  projects,
  index,
}: {
  projects: Project[];
  index: number;
}) => {
  const [isNewProject, setIsNewProject] = useState<boolean>(false);
  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <div className="flex px-32 py-10 h-full flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-2xl">Projects</h1>
        <button
          onClick={() => {
            setIsNewProject(true);
          }}
          className="relative overflow-hidden rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border-[1px] border-[#CC0495] bg-[#CC0495]/70 hover:bg-[#CC0495] transition-all ease-in-out"
        >
          {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1ADBCC_0%,#FFD700_50%,#1ADBCC_100%)]" /> */}
          {/* <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#DB1A5A] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"> */}
          Create Project
          {/* </span> */}
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        {projects.slice((index - 1) * 6, index * 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <PaginationView
        pages={Math.ceil(projects.length / 6)}
        current={index ? index : 1}
      />
      <CreateProjectModal
        isOpen={isNewProject}
        onClose={() => setIsNewProject(false)}
      />
      {/* <AddColumnComponent
        isOpen={isNewProject}
        onClose={() => setIsNewProject(false)}
      /> */}
    </div>
  );
};

export default ProjectView;
