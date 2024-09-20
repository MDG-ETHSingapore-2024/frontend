import { Project } from "@/utils/types";
import ProjectCard from "./ProjectCard";

import { PaginationView } from "./PagtinationView";
import { useState } from "react";
import CreateProjectModal from "./CreateProjectModal";
import AddColumnComponent from "./AddColumnModal";
const ProjectView = ({
  projects,
  index,
}: {
  projects: Project[];
  index: number;
}) => {
  const [isNewProject, setIsNewProject] = useState<boolean>(false);
  return (
    <div className="flex px-40 py-10 h-full flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-2xl">Projects</h1>
        <button
          onClick={() => {
            setIsNewProject(true);
          }}
          className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1ADBCC_0%,#FFD700_50%,#1ADBCC_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#DB1A5A] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Create Project
          </span>
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-10 justify-between items-center">
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
