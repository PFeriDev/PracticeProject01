import Button from "./Button";
import { NextPage } from "next";
interface BlogPostCardProps {
  Coverpic: string;
  Title: string;
  Description: string;
  onClick?: () => void;
}

const BlogPostCard: NextPage<BlogPostCardProps> = ({ Coverpic, Title, Description, onClick }) => {
  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg shadow-maingreen/30 shadow-xl border-2 border-maingreen border-opacity-20 hover:scale-105 transition-all">
      <img src={Coverpic} alt="developer" width={400} />
      <h1 className="font-Poppins font-black text-xl p-0.5 text-center text-mainwhite mt-5 mb-2">
        {truncate(Title, 40)}
      </h1>
      <p className="font-Inter font-light text-lg text-maingraytext text-center">{truncate(Description, 100)}</p>
      <div className="flex justify-center mt-5 mb-5">
        <Button title1={"Read more!"} title2={"Worth it!"} />
      </div>
    </div>
  );
};

export default BlogPostCard;
