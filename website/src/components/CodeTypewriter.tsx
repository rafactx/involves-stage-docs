'use client';

import { motion } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Importa a linguagem JS
import 'prismjs/themes/prism-tomorrow.css'; // Importa o tema
import { useEffect, useState } from 'react';

const codeExample = `import { InvolvesStageAPI } from '@involves/stage-api';

const api = new InvolvesStageAPI({
  apiKey: process.env.API_KEY,
  environmentId: 'your-environment-id',  language: 'pt-BR'
});

const response = await api.request(
  'GET',  \`/v1/\${api.environmentId}/pointofsale\`,
  { params: { status: 'active', limit: 1 } }
);

console.log('Status:', response.status); // 200
console.log('Dados:', JSON.stringify(response.data, null, 2));

/*Retorno esperado:
[
  {
    "id": 0,
    "pointOfSaleBaseId": 0,
    "name": "string",
    "companyName": "string"
  }
]*/
`;

export default function CodeTypewriter() {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState('');

  // Efeito máquina de escrever
  useEffect(() => {
    if (currentIndex < codeExample.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeExample[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 16);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Aplica Prism sempre que displayedCode mudar
  useEffect(() => {
    setHighlightedCode(Prism.highlight(displayedCode, Prism.languages.javascript, 'javascript'));
  }, [displayedCode]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
      aria-label="Exemplo de código animado"
      tabIndex={0}
    >
      {/* Cabeçalho estilo macOS */}
      <div className="glass rounded-t-lg px-4 py-2 flex items-center border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow" />
          <div className="w-3 h-3 rounded-full bg-green-500 shadow" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-white/50 font-mono">example.js</span>
        </div>
      </div>

      {/* Editor animado */}
      <div className="glass rounded-b-lg p-6 font-mono text-sm overflow-x-auto max-h-[560px]">
        <pre className="language-javascript !bg-transparent !text-white m-0">
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{
              __html:
                highlightedCode +
                (currentIndex < codeExample.length
                  ? `<span class="inline-block w-2 h-5 align-middle bg-blue-400 ml-1 animate-pulse"></span>`
                  : ''),
            }}
          />
        </pre>
      </div>

      {/* Brilho de fundo */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 pointer-events-none">
        <div className="h-full w-full gradient-animated rounded-lg" />
      </div>
    </motion.div>
  );
}
