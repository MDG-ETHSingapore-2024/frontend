import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ProjectPage from '@/components/dashboard/ProjectPage';

const ProjectPageLayout = () => {
  const { id } = useParams<{ id: string }>();
  const isRelational = false;
  
  return <ProjectPage projectId={id!} isRelational={isRelational} />;
};

export default ProjectPageLayout;
