"use client";
import React, { useState } from "react";
import FullScreenModal from "../components/FullScreenModal";
import BlogPostCard from "../components/BlogPostCard";
import Button from "../components/Button";

const Blogpost01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        {/* Blog Card */}
        <BlogPostCard
          Coverpic={
            "https://media.istockphoto.com/id/1335050732/hu/fot%C3%B3/%C3%BCzletember-seg%C3%ADts%C3%A9g%C3%A9vel-a-sz%C3%A1m%C3%ADt%C3%B3g%C3%A9p-dokumentumkezel%C3%A9si-koncepci%C3%B3-online-dokument%C3%A1ci%C3%B3s.jpg?s=1024x1024&w=is&k=20&c=JhYIPmMCt4GH-kl7wsLv2n6lm_zk3P8LD53itdXaB2o="
          }
          Title={"10 Essential Tools Every Web Developer Should Know in 2024"}
          Description={
            "In the fast-evolving world of web development, staying updated with the latest tools and technologies is crucial. With the right tools, developers can streamline their workflow, enhance productivity, and create high-quality websites and applications. As we move into 2024, the landscape continues to shift, and knowing the essential tools is more important than ever."
          }
          onClick={openModal}
        />

        {/* Fullscreen Modal */}
        <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
          <section className="w-full p-10">
            <div className="w-full h-[15rem]">
              <img src="./blogpost1pic.png" alt="webdevelop" className="w-full rounded-xl" />
              <div>
                <p className="font-Inter font-normal text-md text-maingraytext mt-2 mb-2">August 17, 2022</p>
                <h1 className="font-Poppins font-extrabold text-4xl text-mainwhite mb-5">
                  10 Essential Tools Every Web Developer Should Know in 2024
                </h1>
                <p className="font-Inter font-normal text-lg text-maingraytext mt-2 mb-2">
                  In the fast-evolving world of web development, staying updated with the latest tools and technologies
                  is crucial. With the right tools, developers can streamline their workflow, enhance productivity, and
                  create high-quality websites and applications. As we move into 2024, the landscape continues to shift,
                  and knowing the essential tools is more important than ever. Here are 10 essential tools that every
                  web developer should be familiar with in 2024:
                </p>
              </div>

              <img
                src="https://media.istockphoto.com/id/1335050732/hu/fot%C3%B3/%C3%BCzletember-seg%C3%ADts%C3%A9g%C3%A9vel-a-sz%C3%A1m%C3%ADt%C3%B3g%C3%A9p-dokumentumkezel%C3%A9si-koncepci%C3%B3-online-dokument%C3%A1ci%C3%B3s.jpg?s=1024x1024&w=is&k=20&c=JhYIPmMCt4GH-kl7wsLv2n6lm_zk3P8LD53itdXaB2o="
                alt="webdeveloper"
                className="rounded-xl"
              />
              <p></p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">
                1. Visual Studio Code (VS Code)
              </h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Visual Studio Code remains one of the most popular and versatile code editors for developers. Its
                lightweight nature, combined with powerful features like IntelliSense, Git integration, and a vast
                library of extensions, makes it a must-have tool. Whether you're writing HTML, CSS, JavaScript, or any
                other programming language, VS Code helps you stay efficient and productive.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">2. Git & GitHub</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Version control is a critical part of any modern development workflow, and Git is the industry-standard
                tool for managing code changes. GitHub, a platform built around Git, allows developers to collaborate on
                projects, host repositories, and manage version control remotely. Understanding Git and GitHub is
                essential for any developer, whether you’re working solo or as part of a team.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">3. Figma</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Figma has become a go-to design tool for web developers and designers alike. Its cloud-based nature
                allows for real-time collaboration on design projects, and it seamlessly integrates with the web
                development workflow. With Figma, developers can access design files directly, ensuring that the end
                product matches the vision of the design team.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">4. Webpack</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Webpack is a module bundler that allows developers to bundle their JavaScript files and assets,
                optimizing the performance of their web applications. It helps reduce the number of requests to the
                server and ensures a smoother user experience by efficiently bundling files into smaller, manageable
                chunks. As single-page applications and dynamic sites continue to rise in popularity, Webpack has become
                an indispensable tool for modern web development.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">5. Node.js</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Node.js enables developers to use JavaScript on the server side. With its event-driven, non-blocking I/O
                model, Node.js is known for its scalability and efficiency in handling web requests. It has become a
                core technology for full-stack development, enabling JavaScript to be used for both frontend and backend
                development, which greatly streamlines the development process.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">6. Tailwind CSS</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Tailwind CSS has transformed the way web developers design responsive, mobile-first websites. This
                utility-first CSS framework makes it easy to create custom designs with minimal effort. Instead of
                writing custom CSS rules, developers can use predefined utility classes to quickly build components and
                layouts. In 2024, it’s widely regarded as one of the best CSS frameworks for rapid development.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">7. React.js</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                React.js continues to dominate the frontend development landscape in 2024. Developed by Facebook, React
                is a powerful JavaScript library for building user interfaces, especially single-page applications. Its
                component-based architecture allows developers to create reusable UI components, improving code
                maintainability and performance. With a strong ecosystem and community support, React remains one of the
                most essential tools for web developers.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">8. Chrome DevTools</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Google Chrome's built-in developer tools are invaluable for debugging and optimizing websites. Chrome
                DevTools provide a suite of features, including performance profiling, network monitoring, and code
                inspection. By using these tools, developers can diagnose issues directly in the browser, helping to
                speed up the development and troubleshooting process.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">9. Postman</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Postman is an API development and testing tool used to build, test, and manage APIs. It simplifies the
                process of making API requests, analyzing responses, and debugging issues, making it an essential tool
                for backend and full-stack developers. With Postman, developers can automate API tests and ensure that
                their applications are communicating correctly with external services.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">10. Docker</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                Docker is a platform for automating the deployment and scaling of applications. It allows developers to
                package applications and their dependencies into containers, ensuring that they run consistently across
                different environments. Docker is especially useful for ensuring compatibility between development,
                testing, and production environments, making it an essential tool for modern web development.
              </p>
              <h2 className="font-Poppins font-extrabold text-2xl text-mainwhite mb-5 mt-5">Conclusion</h2>
              <p className="font-Inter font-normal text-lg text-maingraytext mt-2 leading-relaxed">
                In 2024, these 10 tools should be part of every web developer's toolkit. From code editors like VS Code
                to essential technologies like Node.js and Docker, these tools streamline the development process and
                help developers create better, more efficient web applications. Whether you're a beginner or an
                experienced developer, mastering these tools will ensure you're prepared for the ever-changing world of
                web development. Stay updated with these tools, explore new features, and embrace the ones that work
                best for your workflow. With the right tools at your disposal, you can enhance your productivity,
                streamline your coding practices, and continue to deliver outstanding web experiences in 2024 and
                beyond.
              </p>
              <div className="flex justify-center mt-5 pb-10">
                <Button title1={"Close"} title2={"Close"} onClick={closeModal} />
              </div>
            </div>
          </section>
        </FullScreenModal>
      </div>
    </>
  );
};

export default Blogpost01;
