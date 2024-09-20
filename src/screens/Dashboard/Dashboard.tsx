import ProjectView from "@/components/dashboard/ProjectsView";
import { dummyProjects } from "@/utils/dummy";
import { Project } from "@/utils/types";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const projects: Project[] = dummyProjects;
  const { state } = useLocation();
  console.log(state);
  return (
    <ProjectView projects={projects} index={state.page ? state.page : 0} />
  );
};

export default Dashboard;
