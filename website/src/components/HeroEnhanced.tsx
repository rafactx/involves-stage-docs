import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Footer from './Footer';

// ✅ Import dinâmico correto - evita problemas de hidratação
const CodeTypewriter = dynamic(() => import('./CodeTypewriter'), {
  ssr: false,
  // Adiciona loading state para melhor UX
  loading: () => <div className="animate-pulse bg-white/5 rounded-lg h-96" />,
});

// ✅ Constantes bem definidas e imutáveis
const TYPEWRITER_WORDS = [
  'Desenvolva com segurança e agilidade',
  'Explore endpoints RESTful com precisão',
  'Documentação clara, pronta para Devs',
  'Suporte multilíngue',
  'Autenticação sólida com tokens e headers',
] as const;

const spacing = {
  small: 'gap-0 md:gap-2',
  medium: 'gap-6 md:gap-8',
  large: 'gap-8 md:gap-12',
  xlarge: 'gap-10 md:gap-16',
};

// ✅ Constantes de timing para fácil manutenção
const TYPEWRITER_TIMING = {
  typingDelay: 150,
  deletingDelay: 50,
  pauseDelay: 1500,
} as const;

// ✅ Componente extraído para melhor organização
function TypewriterText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[currentWordIndex];

    // ✅ Early return para melhor legibilidade
    if (!currentWord) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Digitando
          setCurrentText(currentWord.substring(0, currentText.length + 1));

          // Palavra completa - aguarda antes de deletar
          if (currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), TYPEWRITER_TIMING.pauseDelay);
          }
        } else {
          // Deletando
          setCurrentText(currentWord.substring(0, currentText.length - 1));

          // Texto vazio - próxima palavra
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
          }
        }
      },
      isDeleting ? TYPEWRITER_TIMING.deletingDelay : TYPEWRITER_TIMING.typingDelay,
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting]);

  return (
    <span className="gradient-text inline-flex items-baseline">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="inline-block w-[4px] h-[1.2em] bg-gradient-to-b from-blue-400 to-purple-600 ml-1"
        aria-hidden="true" // ✅ Acessibilidade: cursor é decorativo
      />
    </span>
  );
}

export default function HeroEnhanced() {
  return (
    // ✅ Section semântica com altura total e flexbox
    <section className="relative min-h-screen flex flex-col">
      <AnimatedBackground />

      {/* ✅ Container principal com flex-grow para ocupar espaço disponível */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna esquerda - Conteúdo principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`flex flex-col ${spacing.small} text-center lg:text-left`}
            >
              {/* Título principal */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                Involves Stage
                <span className="block">
                  <span className="gradient-text">API Reference</span>
                </span>
              </motion.h1>

              {/* Texto animado typewriter */}
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-semibold min-h-[1.5em] !-mt-2 md:-mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                aria-label="Recursos em destaque"
              >
                <TypewriterText />
              </motion.div>

              {/* Descrição */}
              <motion.p
                className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              >
                Explore nossa documentação completa e descubra como integrar facilmente com a API do
                Involves Stage.
              </motion.p>

              {/* Spacer adicional antes do botão - ajustável */}
              <div className="h-0 md:h-0" aria-hidden="true" />

              {/* Botão CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 200,
                }}
                className="flex justify-center lg:justify-start"
              >
                <Button
                  asChild
                  variant="ghostInverse"
                  className="!px-8 !py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 gradient-animated"
                >
<a
  href="/docs"
  className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
>
  Documentação
</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Coluna direita - Code preview */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <CodeTypewriter />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Footer posicionado corretamente */}
      <Footer />
    </section>
  );
}
