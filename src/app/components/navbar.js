"use client";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar ">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">Augusto</a>

        {/* Toggle menu button */}
        <div className="navbar__menu-icon" onClick={toggleNavbar}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Nav items - hide/show based on state */}
      <div className={`navbar__items ${isOpen ? 'navbar__items--open' : ''}`}>
        <a href="#home" className="navbar__link">Home</a>
        <a href="/projects" className="navbar__link">Projects</a>
        <a href="/about" className="navbar__link">About me</a>
        <a href="/skills" className="navbar__link">Skills</a>
        <a href="/contact" className="navbar__link">Contact me</a>
        <a href="/english" className="navbar__link">EN</a>
      </div>
    </nav>
  );
}
