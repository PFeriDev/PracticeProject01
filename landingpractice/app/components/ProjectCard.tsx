import Button from "./Button";
import { NextPage } from "next";

interface ProjectCardProps {
  Coverpic: string;
  AltTitle: string;
  Title: string;
  onClick?: () => void;
}

const ProjectCard: NextPage<ProjectCardProps> = ({ Coverpic, AltTitle, Title, onClick }) => {
  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg shadow-maingreen/30 shadow-xl border-2 border-maingreen border-opacity-20 hover:scale-105 transition-all">
      <img src={Coverpic} alt="developer" width={400} />
      <h1 className="font-Inter font-normal text-lg p-0.5 text-center text-maingreen mt-5 mb-2">
        <span className="text-maingraytext">Task:</span> {AltTitle}
      </h1>
      <p className="font-Poppins font-black text-2xl text-mainwhite text-center">{truncate(Title, 100)}</p>
      <div className="flex justify-center mt-5 mb-5">
        <Button title1={"Read more!"} title2={"Worth it!"} />
      </div>
    </div>
  );
};

export default ProjectCard;
