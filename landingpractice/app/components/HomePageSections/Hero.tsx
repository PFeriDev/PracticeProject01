const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="hero-section w-full h-screen top-0 flex justify-center text-center items-center relative">
        <video
          className="absolute top-0 left-0 w-full h-[90%] object-cover opacity-10"
          autoPlay
          loop
          muted
          playsInline
          preload="auto">
          <source src="./giphy1080p.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <div className="grid grid-cols-1 gap-3 z-10 relative">
          <h1 className="font-Poppins font-semibold text-center text-maingraybg text-5xl">
            Creative Web Development <br /> with the Latest Technologies!
          </h1>
          <h2 className="font-Poppins font-semibold text-center text-maingraybg text-3xl">
            Technological solutions that help you <br /> stand out in the digital world.
          </h2>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mainblack via-transparent to-transparent opacity-100 backdrop-blur-md z-0"></div>
      </section>
    </>
  );
};

export default Hero;
