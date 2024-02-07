import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const data = [
  {
    title: "1 Superior Construction",
    content:
      "With over three decades of experience, GK Builders and Developers is amongst the most trusted real estate developers in Hyderabad. Our brand is synonymous with superior quality of construction materials, best-in-industry practices, and compliance with safety protocol.",
  },
  {
    title: "2 Value For Money",
    content:
      "We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
  },
  {
    title: "3 Transparency",
    content:
      "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices We are committed to following all RERA guidelines and complying with all local municipal laws while developing our projects.",
  },
  {
    title: "4 Track Record",
    content:
      "Our 4000+ customers are truly our brand ambassadors and endorse our brand’s commitment and professionalism We have created an impeccable track and reputation and we are committed to taking this legacy forward.",
  },
];

const Accordian = () => {
  const [open, setOpen] = useState("");

  const toggle = (id) => {
    setOpen((prevOpen) => (prevOpen === id ? null : id));
  };

  return (
    <div>
      <Accordion className="bg-transparent" flush open={open} toggle={toggle}>
        {data.map((item, index) => (
          <AccordionItem key={index} className="bg-transparent">
            <AccordionHeader className="bg-transparent" targetId={item.title}>
              {item.title}
            </AccordionHeader>
            <AccordionBody className="bg-transparent" accordionId={item.title}>
              {item.content}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
