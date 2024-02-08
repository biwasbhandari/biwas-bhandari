import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="container mx-auto p-4 " id="project">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 gap-4 ">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
