import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="herobg w-full h-screen top-0 flex justify-center text-center items-center">
        <div className="grid grid-cols-1 gap-3">
          <h1 className="font-Poppins font-semibold text-center text-maingraybg text-5xl">
            Creative Web Development <br /> with the Latest Technologies!
          </h1>
          <h2 className="font-Poppins font-semibold text-center text-maingraybg text-3xl">
            Technological solutions that help you <br /> stand out in the digital world.
          </h2>
        </div>
      </section>

      <section className="z-9">
        <div className="h-screen flex justify-center items-center dark:bg-gray-800">
          <div className="max-w-xl mx-auto w-full">
            <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">Skills</h4>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Web Design</span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#FF6464"
                  strokeWidth="1"
                  fillOpacity="0"></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Mobile App</span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#9272D4"
                  strokeWidth="1"
                  fillOpacity="0"></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Illustrator</span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#5185D4"
                  strokeWidth="1"
                  fillOpacity="0"></path>
              </svg>
            </div>

            <div className="mb-7">
              <div className="flex justify-between py-1">
                <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Photoshop</span>
                <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
              </div>
              <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path
                  className="rc-progress-line-trail"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  fillOpacity="0"></path>
                <path
                  className="rc-progress-line-path"
                  d="M 0.5,0.5 L 99.5,0.5"
                  strokeLinecap="round"
                  stroke="#CA56F2"
                  strokeWidth="1"
                  fillOpacity="0"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
