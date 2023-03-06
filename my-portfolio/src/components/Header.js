import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScroll = window.scrollY;

    const handleScroll = () => {
      const currScroll = window.scrollY;
      const headerElem = headerRef.current;

      if (!headerElem) return;

      prevScroll > currScroll
        ? (headerElem.style.transform = "translateY(0)")
        : (headerElem.style.transform = "translateY(-200px)");

      prevScroll = currScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              /* Add social media links based on the `socials` data */
              socials.map((social) => {
                return (
                  <a href={social.url} key={social.id}>
                    <FontAwesomeIcon
                      icon={social.icon}
                      size="2x"
                      style={{ padding: 10 }}
                    />
                  </a>
                );
              })
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects-section" onClick={handleClick}>
                Projects{" "}
              </a>
              <a href="/#contactme-section" onClick={handleClick}>
                Contact Me{" "}
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
