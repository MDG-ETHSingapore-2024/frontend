import { Project } from "@/utils/types";
import ProjectCard from "./ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProjectView = ({
  projects,
  index,
}: {
  projects: Project[];
  index: number;
}) => {
  return (
    <div className="flex px-40 py-10 h-full flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-2xl">Projects</h1>
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
      <PaginationView pages={projects.length / 6} current={index ? index : 1} />
    </div>
  );
};

export function PaginationView({
  pages,
  current,
}: {
  pages: number;
  current: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {current - 1 >= 1 && (
          <Link to={"/dashboard"} state={{ page: current - 1 }}>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
          </Link>
        )}
        {Array(pages)
          .fill(null)
          .map((_, index) => (
            <PaginationItem key={index}>
              <Link to={"/dashboard"} state={{ page: index + 1 }}>
                <PaginationLink
                  className={`${index + 1 == current ? "bg-[#251926]" : ""}`}
                  isActive={index + 1 == current}
                >
                  {index + 1}
                </PaginationLink>
              </Link>
            </PaginationItem>
          ))}
        {current + 1 <= pages && (
          <Link to={"/dashboard"} state={{ page: current + 1 }}>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </Link>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default ProjectView;
