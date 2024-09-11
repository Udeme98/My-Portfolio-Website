import ProjectCard from "../components/ProjectCard.js";
import { projects } from "../Projects.js";

const Projects = () => {
  //   console.log(projects);
  return (
    <>
      <section className="bg-slate-800">
        <div className="container mx-auto text-center py-8">
          <h2 className="text-2xl uppercase text-red-600 font-semibold mb-4 border-b-2 border-red-600  inline-block">
            My Projects
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-9 md:grid-cols-3 justify-items-center">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Projects;
