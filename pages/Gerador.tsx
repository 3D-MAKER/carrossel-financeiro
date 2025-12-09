import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2, Wallet, TrendingUp, PiggyBank, CreditCard, DollarSign, LayoutDashboard } from 'lucide-react';
import { FinancialTopic } from '../types';

const Gerador: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<FinancialTopic | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const topics: { id: FinancialTopic; label: string; icon: React.ReactNode }[] = [
    { id: 'educacao_financeira', label: 'Educação Financeira', icon: <Wallet /> },
    { id: 'investimentos', label: 'Investimentos', icon: <TrendingUp /> },
    { id: 'organizacao', label: 'Organização', icon: <LayoutDashboard /> },
    { id: 'dividas', label: 'Sair das Dívidas', icon: <CreditCard /> },
    { id: 'renda_extra', label: 'Renda Extra', icon: <DollarSign /> },
    { id: 'credito', label: 'Crédito Consciente', icon: <PiggyBank /> },
  ];

  const handleGenerate = () => {
    if (!selectedTopic) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      // In a real app, we would pass data via context or state management
      // For this architecture demo, we'll use URL params or just navigate
      navigate(`/resultado?topic=${selectedTopic}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="max-w-4xl mx-auto w-full px-4 py-12 flex-1 flex flex-col justify-center">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Sobre o que vamos falar hoje?
          </h1>
          <p className="text-slate-600">
            Escolha um tema e nossa IA criará um carrossel completo para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-4 hover:shadow-lg ${
                selectedTopic === topic.id
                  ? 'border-primary bg-indigo-50 text-primary'
                  : 'border-white bg-white text-slate-600 hover:border-indigo-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                selectedTopic === topic.id ? 'bg-primary text-white' : 'bg-slate-100'
              }`}>
                {topic.icon}
              </div>
              <span className="font-semibold">{topic.label}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            disabled={!selectedTopic || isGenerating}
            className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all ${
              !selectedTopic || isGenerating
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200'
            }`}
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Gerando Conteúdo...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Gerar Carrossel
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gerador;
