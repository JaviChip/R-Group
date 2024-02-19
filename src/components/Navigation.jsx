"use client";

import { items } from "@/data/nav.js";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import RLogo from "../public/home/R-Logo.png";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:min-h-[5vh] p-0 bg-blue-800 bg-opacity-90 justify-between items-center backdrop-blur-sm"
    >
      <Navbar.Brand className="p-0">
        <Link
          as={Link}
          eventkey="1"
          className="p-0 no-underline flex items-center gap-2"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image src={RLogo} className=" w-16 h-20 my-2 ml-1" alt="R-logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className=" text-white text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center md:justify-end justify-center flex">
        <Nav className="mb-2 w-12/12 no-underline flex text-xl items-center left-0 md:ml-auto text-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`hover:cursor-pointer mb-0 py-1 px-4 !font-medium !text-yellow-500 text-xl whitespace-nowrap hover:!text-blue-950 duration-300 ${
                selected === item.name ? "underline" : "no-underline"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
