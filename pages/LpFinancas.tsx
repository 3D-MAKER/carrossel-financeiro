import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Instagram, Linkedin } from 'lucide-react';

const LpFinancas: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="font-bold text-xl text-secondary tracking-tight">FinSmart Studio</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/gerador" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Entrar
            </Link>
            <Link 
              to="/gerador" 
              className="bg-primary hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-200"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="pt-20 pb-32 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-primary text-sm font-medium mb-8 border border-indigo-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Nova IA Generativa Financeira v2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-8">
            Crie belos <span className="text-primary">Carrosséis</span> para redes sociais em segundos
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            O Criador de Carrossel permite que você projete rapidamente belos carrosséis educativos sobre finanças para suas postagens, sem nenhuma experiência em design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/gerador" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
            >
              Comece de Graça
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-secondary border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              Ver Exemplos
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Otimizado para Instagram</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">TikTok</span>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="bg-slate-50 py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Conteúdo Automático', desc: 'IA especializada em investimentos e organização financeira.' },
                { title: 'Design Profissional', desc: 'Templates validados que aumentam o engajamento.' },
                { title: 'Exportação Rápida', desc: 'Baixe em PNG ou PDF pronto para postar.' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LpFinancas;