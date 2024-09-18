import ProjectCard from "../components/ProjectCard.js";
import { projects } from "../projects.ts";

const Projects = () => {
  //   console.log(projects);
  return (
    <>
      <section className="bg-slate-800" id="projects">
        <div className="container mx-auto text-center py-8">
          <h2 className="text-xl md:text-2xl uppercase text-red-600 font-semibold mb-4 border-b-2 border-red-600  inline-block">
            My Projects
          </h2>
        </div>
        <div className="container mx-auto gap-5 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 justify-items-center pb-6">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Projects;
