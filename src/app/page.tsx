'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [token, setToken] = useState<string>('Nenhum token encontrado');
  const [showToast, setShowToast] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setToken(code);
    }
  }, [searchParams]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(token);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-5 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <div className="fixed -z-10 opacity-30">
        <div className="circle-1 w-[300px] h-[300px] bg-[radial-gradient(circle,#0ea5e9,#0c4a6e)] rounded-full absolute -top-[150px] -right-[150px] blur-[80px]"></div>
        <div className="circle-2 w-[200px] h-[200px] bg-[radial-gradient(circle,#0369a1,#0c4a6e)] rounded-full absolute -bottom-[100px] -left-[100px] blur-[60px]"></div>
      </div>

      <div className="w-full max-w-[600px] bg-[#1e293b] rounded-xl shadow-lg p-10 border border-[#475569] mb-8">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-medium mb-2 text-[#e2e8f0] text-shadow">
            Seu TG-TOKEN
          </h1>
          <p className="text-[#94a3b8] text-sm">
            Exibindo seu TG-TOKEN
          </p>
        </div>

        <div>
          <label className="block mb-3 text-sm text-[#94a3b8] font-medium">
            Seu token de acesso:
          </label>
          <div className="relative">
            <div className={`bg-[#0c4a6e] p-6 pr-16 rounded-lg font-mono text-sm break-all text-[#38bdf8] border-l-3 border-[#38bdf8] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${token === 'Nenhum token encontrado' ? 'border-[#b91c1c] bg-[#450a0a] text-[#fca5a5]' : ''}`}>
              {token}
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute top-3 right-3 bg-[#0284c7] text-white w-10 h-10 rounded-md flex items-center justify-center transition-all duration-200 hover:bg-[#38bdf8] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <footer className="text-center text-[#94a3b8] text-sm font-normal mb-6 opacity-80 hover:opacity-100 transition-opacity">
        Desenvolvido por reninja
      </footer>

      {showToast && (
        <div className="fixed top-5 right-5 bg-[#10b981] text-white px-5 py-3 rounded-md shadow-lg transform transition-all duration-300 opacity-100 translate-y-0">
          Token copiado!
        </div>
      )}
    </main>
  );
} 