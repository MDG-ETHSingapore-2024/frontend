import { useDispatch } from "react-redux";
import { BackendSdk } from "../services/backendSDK";
import { BASE_BACKEND_URL } from "../contants/appInfo";
import { setProjects } from "../redux/project/project.slice";
import { Project } from "../types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAppSelector } from "../redux/store";

export const useProjects = () => {
  const dispatch = useDispatch();
  const [localProjects, setLocalProjects] = useState<Project[]>([]);
  const { projects } = useAppSelector((state) => state.projects);
  const fetchProjects = () => {
    try {
      BackendSdk.getData(`${BASE_BACKEND_URL}/projects`, null).then((data) => {
        dispatch(setProjects(data.projects));
        setLocalProjects(data.projects);
      });
    } catch (error: any) {
      toast.error(`Unable to fetch projects, ${error.message}`);
    }
  };

  useEffect(() => {
    if (!projects) fetchProjects();
  });

  return {
    projects: projects ? projects : localProjects,
    refetchProjects: fetchProjects,
  };
};
