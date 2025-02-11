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

  // Variantes para animação do menu mobile
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuItems = [
    { text: "Diferencial", id: "differential" },
    { text: "Serviços", id: "services" },
    { text: "Contatos", id: "contact" },
    { text: "Página Inicial", id: "home" }, // Somente no mobile
  ];

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
        {menuItems
          .filter((item) => item.id !== "home") // 🔥 Remove "Página Inicial" do menu fixo
          .map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className="text-emerald-800 hover:text-emerald-600 xl:hover:border-b-2 xl:border-amber-600 xl:pb-1"
              >
                {item.text}
              </a>
            </li>
          ))}
      </ul>

      {/* Overlay para fundo escuro no mobile */}
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
            {menuItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  href={`#${item.id}`}
                  onClick={toggleMenu}
                  className="text-amber-700"
                >
                  {item.text}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
