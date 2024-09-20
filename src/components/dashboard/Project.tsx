import { useParams } from "react-router-dom";

const Project = () => {
  let params = useParams();
  //   const projectDetails = fetchUsingProjectId
  const projectDetails = {};

  return <div>Project {params.id} </div>;
};

export default Project;
