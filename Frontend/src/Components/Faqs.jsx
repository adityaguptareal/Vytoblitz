import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} open={open} style={{fontSize:"15px"}}>What is the tech fest?</AccordionHeader>
        <AccordionBody >
        The tech fest is an exciting event showcasing technology, innovation, and creativity. It features competitions, workshops, and networking opportunities for students. Join us to explore the latest trends and showcase your skills!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open}  />}>
        <AccordionHeader onClick={() => handleOpen(2)} style={{fontSize:"15px"}} >
        Who can participate?
        </AccordionHeader>
        <AccordionBody>
        The tech fest is open to all college students interested in technology and innovation. Whether you're a beginner or an expert, there's something for everyone. Come and showcase your talents!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open}  />}>
        <AccordionHeader onClick={() => handleOpen(3)} style={{fontSize:"15px"}} >
        How to register?
        </AccordionHeader>
        <AccordionBody>
        Registration can be completed online through our official website. Simply fill out the registration form and submit it. Don't miss your chance to be part of this amazing event!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open}  />}>
        <AccordionHeader onClick={() => handleOpen(4)} style={{fontSize:"15px"}} >
        What events are included?
        </AccordionHeader>
        <AccordionBody>
        The tech fest includes various events such as quizzes, hackathons, design competitions, and esports tournaments. Each event is designed to challenge your skills and creativity. Join us for a fun and engaging experience!
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open}  />}>
        <AccordionHeader onClick={() => handleOpen(5)} style={{fontSize:"15px"}} >
        Is there a fee?
        </AccordionHeader>
        <AccordionBody>
        Participation in the tech fest is free for all registered students.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionCustomIcon;