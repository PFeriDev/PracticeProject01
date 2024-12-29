import Image from "next/image";

const Technologies = () => {
  return (
    <>
      <section id="skills" className="w-full mt-10">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">The Skills Behind the Screen</h3>
        <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">Technologies I Use</h1>
      </section>

      <section className="w-full">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-3/5 mx-auto">
          <div className="techstack lg:border-r-2 ">
            <Image src="/stacklogos/html.png" alt="html" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <Image src="/stacklogos/css.png" alt="css" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <Image src="/stacklogos/js.png" alt="js" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack">
            <Image src="/stacklogos/react.png" alt="react" width={130} height={130} className="techstackpics" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-3/5 mx-auto">
          <div className="techstack lg:border-r-2 p-5 ">
            <Image src="/stacklogos/nextjs.png" alt="nextjs" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <Image
              src="/stacklogos/typescript.png"
              alt="typescript"
              width={130}
              height={130}
              className="techstackpics"
            />
          </div>
          <div className="techstack lg:border-r-2 ">
            <Image src="/stacklogos/nodejs.png" alt="nodejs" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack ">
            <Image src="/stacklogos/mysql.png" alt="mysql" width={130} height={130} className="techstackpics" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:w-3/5 mx-auto">
          <div className="techstack lg:border-r-2">
            <Image src="/stacklogos/github.png" alt="github" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack lg:border-r-2 ">
            <Image
              src="/stacklogos/tailwindcss.png"
              alt="tailwindcss"
              width={130}
              height={130}
              className="techstackpics"
            />
          </div>
          <div className="techstack lg:border-r-2 ">
            <Image src="/stacklogos/figma.png" alt="figma" width={130} height={130} className="techstackpics" />
          </div>
          <div className="techstack ">
            <Image src="/stacklogos/photoshop.png" alt="photoshop" width={130} height={130} className="techstackpics" />
          </div>
        </div>
        <p className="font-Inter font-light text-lg text-maingraytext text-center mt-3">
          I look forward to learning even more and advancing my expertise...
        </p>
      </section>
    </>
  );
};

export default Technologies;
