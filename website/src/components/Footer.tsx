import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="absolute bottom-6 left-0 right-0 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="flex items-center justify-center gap-2 text-sm text-white/40">
        <motion.span
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          Crafted with
        </motion.span>

        <motion.span
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-red-500"
        >
          ❤️
        </motion.span>

        <motion.span
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          by
        </motion.span>

        <motion.a
          href="https://github.com/seuusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors underline decoration-dotted underline-offset-4"
          whileHover={{ scale: 1.05 }}
        >
          @seuusername
        </motion.a>
      </div>
    </motion.footer>
  );
}
