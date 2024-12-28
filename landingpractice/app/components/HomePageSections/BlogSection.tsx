import Blogpost01 from "@/app/Blogposts/Blogpost01";
import Blogpost02 from "@/app/Blogposts/Blogpost02";
import Blogpost03 from "@/app/Blogposts/Blogpost03";

const BlogSection = () => {
  return (
    <>
      <section className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">Check out my latest blog posts</h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">My Blog</h1>
        <div className="w-4/6 grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-7">
          <Blogpost01 />
          <Blogpost02 />
          <Blogpost03 />
        </div>
      </section>
    </>
  );
};

export default BlogSection;
