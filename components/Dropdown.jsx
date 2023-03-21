import React from "react";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Dropdown = (props) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className="font-main text-md font-thin w-full"
            >
              More details
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel py={10}>
          <div className="w-[100%] h-[60vh] relative mb-5">
            <Image src="/images/2019/25.jpeg" layout="fill" objectFit="cover" />
          </div>
          <div className="w-[100%] h-[60vh] relative">
            <Image src="/images/2019/26.jpeg" layout="fill" objectFit="cover" />
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Dropdown;
