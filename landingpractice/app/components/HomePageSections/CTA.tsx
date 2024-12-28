const CTA = () => {
  return (
    <>
      <section className="relative w-full h-[20rem] overflow-hidden mt-10 ">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExanA1cXg4M3M0cWxpbmEyd3JzbzNld2owemxod3l5M21wNDExZmt5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9ZsHm0z5QwSYpV7g01/giphy.webp"
          alt="Background GIF"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center h-full text-center lg:text-left">
          <div className="lg:w-3/6  ">
            <div>
              <h1 className="font-Poppins font-black text-2xl text-center lg:text-left text-mainwhite">
                Ready to Take Your Online Presence to the Next Level?
              </h1>
              <h3 className="font-Inter font-light text-lg text-mainwhite text-center lg:text-left mt-3">
                Let’s build something amazing together. Whether you need a stunning website, a powerful application, or
                innovative solutions, I’m here to make it happen!
              </h3>
            </div>
            <div className="mt-5">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-maingraytext via-mainwhite to-maingreen rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href="#contact"
                  title="Get quote now"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-Poppins font-bold text-white transition-all duration-200 bg-mainblack font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">
                  Request a Project!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-mainblack/90 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mainblack via-transparent to-transparent opacity-30 backdrop-blur-md z-0"></div>
      </section>
    </>
  );
};

export default CTA;
