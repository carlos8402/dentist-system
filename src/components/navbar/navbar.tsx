import { HiMenu, HiX } from "react-icons/hi";
import { Logo } from "../logo";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Variantes para animação da lista no menu mobile
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Variantes para animação dos itens no menu mobile
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuItems = ["Diferencial", "Serviços", "Contatos"];

  return (
    <div className="flex items-center justify-between px-4 md:pl-12 bg-white">
      <Logo />

      {/* Botão do menu (Somente em telas pequenas) */}
      <motion.button
        whileTap={{ scale: 0.8, rotate: 10 }}
        className="fixed top-8 right-4 md:hidden z-30"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <HiX className="text-white bg-emerald-500 w-14 h-12 rounded-md" />
        ) : (
          <HiMenu className="text-white bg-emerald-500 w-14 h-12 rounded-md" />
        )}
      </motion.button>

      {/* Menu fixo para telas maiores */}
      <ul className="hidden md:flex md:items-center md:justify-end md:gap-8 md:px-6 text-2xl font-medium">
        {menuItems.map((text, index) => (
          <li key={index}>
            <a
              href={`#${text.toLowerCase().replace(" ", "-")}`}
              className="text-emerald-800 hover:text-emerald-600  xl:hover:border-b-2 xl:border-amber-600 xl:pb-1"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>

      {/* Overlay para fundo escuro */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Menu animado para telas menores */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 size-full bg-white/90 flex flex-col items-center justify-center text-emerald-500 text-3xl font-semibold gap-14 z-20 md:hidden"
          >
            {/* Item "Página Inicial" apenas no menu mobile */}
            <motion.li variants={itemVariants}>
              <a
                href="#home"
                onClick={toggleMenu}
                className="text-amber-700"
              >
                Página Inicial
              </a>
            </motion.li>
            {menuItems.map((text, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  href={`#${text.toLowerCase().replace(" ", "-")}`}
                  onClick={toggleMenu}
                  className="text-amber-700"
                >
                  {text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
