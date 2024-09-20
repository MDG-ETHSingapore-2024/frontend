import { Project } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    activeProjectId: 1,
    isCreateProjectModalOpen: false,
  } as {
    projects: Project[];
    activeProjectId: number;
    isCreateProjectModalOpen: boolean;
  },
  reducers: {
    setActiveProjectId: (state, action) => {
      state.activeProjectId = action.payload;
    },
    addNewProject: (state, action) => {
      state.projects = [...state.projects, action.payload];
    },
    deleteProject: (state, action) => {
      if (state.projects.length > 0) {
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload
        );
      }
    },
  },
});

export const { addNewProject, deleteProject, setActiveProjectId } =
  projectsSlice.actions;

export default projectsSlice.reducer;
