const Projects = () => {
  return (
    <>
      <section className="bg-slate-800">
        <div className="container mx-auto text-center py-8">
          <h2 className="text-2xl uppercase text-red-600 font-semibold mb-4">
            My Projects
          </h2>
        </div>
        <div className="container mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          <div className=" w-[400px] h-[400px] bg-red-600"></div>
          <div className=" w-[400px] h-[400px] bg-blue-600"></div>
          <div className=" w-[400px] h-[400px] bg-green-600"></div>

          {/* <div className="h-[400px] w-[400px] bg-yellow-600"></div> */}
          {/* <div className="bg-red-600 w-full aspect-w-1 aspect-h-1"></div>
          <div className="bg-blue-600 w-full aspect-w-1 aspect-h-1"></div>
          <div className="bg-green-600 w-full aspect-w-1 aspect-h-1"></div>
          <div className="bg-yellow-600 w-full aspect-w-1 aspect-h-1"></div> */}
        </div>
      </section>
    </>
  );
};
export default Projects;
