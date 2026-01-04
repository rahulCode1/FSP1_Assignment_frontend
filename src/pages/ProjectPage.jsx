import { useWorkContext } from "../context/workTrackContext";
import Projects from "../components/project/Projects";
import LoadingSpinner from "../components/loading/LoadingSpinner";

const ProjectPage = () => {
  const { projects, isLoading } = useWorkContext();

  return (
    <>
      {isLoading ? (
        <LoadingSpinner size={30} />
      ) : (
        <Projects projects={projects} />
      )}
    </>
  );
};

export default ProjectPage;
