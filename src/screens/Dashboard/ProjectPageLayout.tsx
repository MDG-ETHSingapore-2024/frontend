import ProjectPage from "@/components/dashboard/ProjectPage";
import { useParams } from "react-router-dom";

const ProjectPageLayout = () => {
  const { id } = useParams<{ id: string }>();
  const isRelational = false;

  return <ProjectPage projectId={id!} isRelational={isRelational} />;
};

export default ProjectPageLayout;
