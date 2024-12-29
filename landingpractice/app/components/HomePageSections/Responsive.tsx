const Responsive = () => {
  return (
    <section className="w-full h-screen flex justify-center mb-[8rem]">
      <div className="lg:w-4/5 lg:flex justify-center items-center grid mx-auto">
        <div className="lg:w-1/2 flex justify-end text-right">
          <h1 className="font-Poppins font-semibold lg:text-right text-center text-maingraybg text-5xl leading-snug lg:w-2/3">
            Responsive Web Designs that Adapt to <span className="text-maingreen">Every Device</span>
          </h1>
        </div>
        <div className="lg:w-1/2 flex justify-start mx-auto">
          <img src="./phone.png" alt="" width={320} className="transition-all lg:hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default Responsive;
