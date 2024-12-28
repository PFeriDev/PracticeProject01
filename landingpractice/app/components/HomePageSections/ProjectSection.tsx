import Project01 from "@/app/Projects/Project01";
import Project02 from "@/app/Projects/Project02";
import Project03 from "@/app/Projects/Project03";

const ProjectSection = () => {
  return (
    <>
      <section id="projects" className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">
          Visit my projects and keep your feedback
        </h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">My Portfolio</h1>
        <div className="w-4/6 grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-7">
          <Project01 />
          <Project02 />
          <Project03 />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
