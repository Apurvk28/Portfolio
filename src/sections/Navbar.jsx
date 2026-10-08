import { useState } from "react";
import { motion } from "motion/react";
function Navigation({ onSelect }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          className="text-lg hover:text-white transition-colors"
          href="#home"
          onClick={onSelect}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="text-lg hover:text-white transition-colors"
          href="#about"
          onClick={onSelect}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          className="text-lg hover:text-white transition-colors"
          href="#work"
          onClick={onSelect}
        >
          Project
        </a>
      </li>
      <li className="nav-li">
        <a
          className="text-lg hover:text-white transition-colors"
          href="#contact"
          onClick={onSelect}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto py-2 z-50 c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-3xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            APURV
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle navigation"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation onSelect={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
