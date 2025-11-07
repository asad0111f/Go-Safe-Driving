import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  show: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
};

export default function Toast({ show, message, onClose, duration = 3000 }: Props) {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="rounded-2xl bg-neutral-900 px-4 py-3 text-sm text-white shadow-soft">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

