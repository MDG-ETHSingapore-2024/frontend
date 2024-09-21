import ProjectView from "@/components/dashboard/ProjectsView";
import { dummyProjects } from "@/utils/dummy";
import { useProjects } from "@/utils/hooks/useProjects";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const projects = dummyProjects;
  // const { projects } = useProjects();
  const { state } = useLocation();
  return <ProjectView projects={projects} index={state ? state.page : 1} />;
};

export default Dashboard;
