const Projects = () => {
  return (
    <>
      <section className="bg-slate-800">
        <div className="container mx-auto  text-center py-8">
          <h2 className="text-2xl uppercase text-red-600 font-semibold mb-4 border-b-2 border-red-600  inline-block">
            My Projects
          </h2>
        </div>
        <div className="container mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {/* starting with one project for now, then i'd transition to mappping it from an array of objects */}
          <div className=" w-[350px] border border-gray-400 rounded-md p-3">
            <img
              src="./images/nike.png"
              alt="nike-thumbnail"
              className="w-full object-cover"
            />
            <div className="mt-3 font-mono text-slate-300">
              <h2 className="mb-2">Nike Landing Page</h2>
              <h2 className="text-xs">HTML/CSS, TailwindCSS</h2>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="bg-red-600 hover:bg-red-500 py-1 px-1 text-gray-300 rounded-md text-xs">
                GitHub
              </button>
              <button className="bg-red-600 hover:bg-red-500 py-1 px-1 text-gray-300 rounded-md text-xs">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
