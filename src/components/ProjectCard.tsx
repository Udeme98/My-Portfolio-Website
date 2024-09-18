import { Link } from "react-router-dom";

type ProjectCardProps = {
  img: string;
  title: string;
  tools: string;
  github: string;
  live: string;
  key?: number;
  id?: number;
};

const ProjectCard = ({ img, title, tools, github, live }: ProjectCardProps) => {
  return (
    <div className=" w-[400px] border border-gray-400 rounded-md p-2">
      <img src={img} alt={title} className="w-full object-cover" />
      <div className="mt-3 font-mono text-slate-300">
        <h2 className="mb-2">{title}</h2>
        <h2 className="text-xs">{tools}</h2>
      </div>
      <div className="flex gap-3 mt-4">
        <Link to={github}>
          <button className="bg-red-600 hover:bg-red-500 py-1 px-1 text-gray-300 rounded-md text-xs">
            GitHub
          </button>
        </Link>

        <Link to={live}>
          <button className="bg-red-600 hover:bg-red-500 py-1 px-1 text-gray-300 rounded-md text-xs">
            Live Demo
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
