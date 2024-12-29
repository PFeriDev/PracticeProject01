import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <>
      <section id="contact" className="w-full mt-[4rem]">
        <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">Start your journey with me!</h3>
        <h1 className="font-Poppins font-black text-4xl text-center text-mainwhite">Lets Connect!</h1>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactSection;
