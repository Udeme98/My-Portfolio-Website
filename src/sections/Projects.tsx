import ProjectCard from "../components/ProjectCard.js";
import { projects } from "../projects.ts";

const Projects = () => {
  //   console.log(projects);
  return (
    <>
      <section className="bg-slate-800" id="projects">
        <div className="container mx-auto text-center py-8">
          <h2 className="text-2xl md:text-3xl uppercase text-red-600 font-semibold mb-4 border-b-2 border-red-600  inline-block">
            My Projects
          </h2>
        </div>
        <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center pb-6">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Projects;
