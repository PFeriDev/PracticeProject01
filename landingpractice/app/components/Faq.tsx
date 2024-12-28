import { NextPage } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {}

const Faq: NextPage<Props> = ({}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          What types of websites do you create?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          How long does it take to build a website?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          What is the process of designing a website?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-4"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          Do you offer website maintenance as well?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-5"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          What information do I need to prepare to get started?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-6"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          What are the costs involved in a project?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-7"
        className="text-mainwhite border-maingraytext hover:border-maingreen/30 transition-all duration-150">
        <AccordionTrigger className="font-Poppins font-semibold text-xl">
          Do you work on improving or redesigning existing websites?
        </AccordionTrigger>
        <AccordionContent className="font-Inter font-normal text-maingraytext text-lg">
          There are always some stocks, which illusively scale lofty heights in a given time period. However, the good
          show doesn't last for these overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
