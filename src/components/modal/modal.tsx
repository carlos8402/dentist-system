import { useState } from "react";
import { motion } from "motion/react";

export function Modal() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md max-w-lg text-center">
            <h2 className="text-xl font-semibold">Aviso Importante</h2>
            <p className="mt-4">
              Este site foi criado para fins educativos. As imagens usadas são
              de fontes externas e estão protegidas por direitos autorais.
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Fechar
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
