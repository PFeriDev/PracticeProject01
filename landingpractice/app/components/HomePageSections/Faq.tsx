import { NextPage } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {}

const Faq: NextPage<Props> = ({}) => {
  return (
    <section className="w-full mt-[4rem]">
      <h3 className="font-Inter font-semibold text-maingreen text-lg text-center">Got Questions? I've Got Answers!</h3>
      <h1 className="font-Poppins font-black text-4xl text-center mb-[4rem] text-mainwhite">FAQ</h1>
      <div className="lg:w-3/5 mx-auto p-5">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              What types of websites do you create?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              I create a variety of websites, including personal portfolios, business websites, e-commerce stores, and
              blogs. Each site is tailored to fit the needs of the client.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              How long does it take to build a website?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              The timeline depends on the complexity of the project. Typically, a simple website can take 2–4 weeks,
              while more complex websites may take 1–3 months.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              What is the process of designing a website?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              The process includes initial consultations, designing wireframes, developing the site’s structure,
              creating visuals, coding, testing, and finally launching the site.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              Do you offer website maintenance as well?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              Yes, I offer ongoing maintenance services, including updates, security checks, and performance
              improvements to keep your website running smoothly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              What information do I need to prepare to get started?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              To get started, you’ll need to provide information about your business or personal goals, preferred design
              styles, content (such as text and images), and any specific features you need.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              What are the costs involved in a project?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              Costs vary based on the type of website and its features. I offer transparent pricing after discussing the
              scope and requirements of the project.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-7"
            className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
            <AccordionTrigger className="font-Poppins font-semibold text-xl">
              Do you work on improving or redesigning existing websites?
            </AccordionTrigger>
            <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
              Yes, I can help improve or completely redesign your existing website to make it more user-friendly,
              modern, and functional.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
