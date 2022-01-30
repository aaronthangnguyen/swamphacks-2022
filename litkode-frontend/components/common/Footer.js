import React from "react";
import { Center, Text, Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Center pt="6rem" pb="2rem">
        <Text fontWeight="medium" color="orange.400">
          Powered with ♥ by{" "}
          <Link
            fontWeight="semibold"
            href="https://www.linkedin.com/in/aaronthangnguyen/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Aaron Nguyen
          </Link>
          {`, `}
          <Link
            fontWeight="semibold"
            href="https://www.linkedin.com/in/abhiti-sachdeva/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Abhiti Sachdeva
          </Link>
          {`, and `}
          <Link
            fontWeight="semibold"
            href="https://www.linkedin.com/in/yagyamalik/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Yagya Malik
          </Link>
        </Text>
      </Center>
    </div>
  );
};

export default Footer;
