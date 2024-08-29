const Hero = () => {
  return (
    <div>
      <div className="flex h-[80vh] justify-evenly items-center">
        <div className="w-[500px] flex flex-col">
          <div>
            <h1 className="text-3xl text-gray-700 italic">Hi,</h1>
            <h1 className="text-5xl font-semibold text-gray-500 leading-normal">
              I'm <span className="text-red-900">Udeme Udeme,</span>
            </h1>
            <p className="text-xl text-gray-700 leading-7">
              A dedicated, passionate, and highly motivated Frontend Web
              Developer with over 3 years of experience working with HTML, CSS,
              JavaScript, NextJS, Typescript, TailwindCSS, ReactJS.
            </p>
          </div>
          <div className="mt-12">
            <button className="bg-red-900 py-3 px-3 text-gray-300 rounded-md">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src="heropic.jpg" width={450} className="rounded-md" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
