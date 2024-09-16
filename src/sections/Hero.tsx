import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const md = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section className="relative overflow-hidden bg-slate-500 font-lato">
      <div className="flex flex-col-reverse md:flex-row md:h-[87vh] items-center justify-evenly px-4 md:px-8">
        <div className="w-full md:w-[500px] flex flex-col text-center md:text-left">
          <div>
            {/* <h1 className="text-xl md:text-2xl text-gray-800 italic">Hi,</h1> */}
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-700 mt-3">
              I'm <span className="text-red-700 ">Udeme Udeme,</span>
            </h1>
            <p className="text-xs md:text-lg text-gray-900 leading-normal mt-3 font-semibold">
              A dedicated, passionate, and highly motivated Frontend Web
              Developer with over 3 years of experience working with HTML, CSS,
              JavaScript, NextJS, Typescript, TailwindCSS, ReactJS to develop
              visually appealing, user-friendly, and responsive web applications
            </p>
          </div>
          <div className="mt-12 mb-10 md:mb-0">
            <a
              href="public/Udeme_Resumé.pdf"
              download="Udeme_Resumé.pdf"
              className="bg-red-700 py-3 px-6 text-gray-300 rounded-md inline-block hover:bg-red-600"
            >
              Download CV
            </a>
          </div>
          {/* <div className="mt-12">
            <button className="bg-red-900 py-3 px-6 text-gray-300 rounded-md">
              Download CV
            </button>
          </div> */}
        </div>
        <div className="flex justify-center m-5">
          <img
            src="heropic.jpg"
            width={md ? "400" : "350"}
            className="rounded-2xl"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;

//   return (
//     <div>
//       <div className="flex md:h-[80vh] justify-evenly items-center flex-col-reverse md:flex-row">
//         <div className="w-[500px] flex flex-col text-center md:text-left">
//           <div>
//             <h1 className="text-3xl text-gray-700 italic">Hi,</h1>
//             <h1 className="text-5xl font-semibold text-gray-500 leading-normal">
//               I'm <span className="text-red-900">Udeme Udeme,</span>
//             </h1>
//             <p className="text-xl text-gray-700 leading-7">
//               A dedicated, passionate, and highly motivated Frontend Web
//               Developer with over 3 years of experience working with HTML, CSS,
//               JavaScript, NextJS, Typescript, TailwindCSS, ReactJS.
//             </p>
//           </div>
//           <div className="mt-12">
//             <button className="bg-red-900 py-3 px-3 text-gray-300 rounded-md">
//               Download CV
//             </button>
//           </div>
//         </div>
//         <div>
//           <img
//             src="heropic.jpg"
//             width={md ? "450" : "400"}
//             className="rounded-md "
//           />
//         </div>
//       </div>
//     </div>
//   );
