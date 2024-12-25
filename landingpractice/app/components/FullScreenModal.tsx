import { SquareX } from "lucide-react";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ isOpen, onClose, children }) => {
  // Effect to disable scrolling on the background
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 modal-content bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // On enter
          exit={{ opacity: 0 }} // On exit
          transition={{ duration: 0.3 }} // Animation duration
          onClick={onClose} // Close modal on background click
        >
          <motion.div
            className="bg-mainblack modal-content lg:w-4/5 p-2 h-full overflow-y-auto relative border-2 border-maingreen border-opacity-15 rounded-xl shadow-md shadow-maingreen transform"
            initial={{ scale: 0.9, opacity: 0 }} // Initial state
            animate={{ scale: 1, opacity: 1 }} // On enter
            exit={{ scale: 0.9, opacity: 0 }} // On exit
            transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration and easing
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close button */}
            <SquareX
              className="absolute  top-4 right-4 text-mainwhite hover:text-maingreen transition-all duration-500 cursor-pointer"
              size={30}
              onClick={onClose}
            />

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenModal;
