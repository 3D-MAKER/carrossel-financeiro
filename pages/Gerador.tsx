import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2, Wallet, TrendingUp, PiggyBank, CreditCard, DollarSign, LayoutDashboard, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
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

  const handleGenerate = async () => {
    if (!selectedTopic) return;
    
    setIsGenerating(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const topicLabel = topics.find(t => t.id === selectedTopic)?.label;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Crie um carrossel educativo para Instagram sobre o tema: "${topicLabel}".
        
        Público alvo: Iniciantes que querem melhorar sua vida financeira.
        Tom de voz: Encorajador, direto e educativo.
        
        Gere EXATAMENTE 5 slides seguindo esta estrutura visual:
        1. Capa: Título impactante (bg-secondary, text-white).
        2. Conteúdo: Problema ou contexto (bg-white, text-slate-900).
        3. Conteúdo: Solução ou Dica Prática (bg-white, text-slate-900).
        4. Conteúdo: Benefício ou Exemplo (bg-white, text-slate-900).
        5. Conclusão/CTA: Chamada para ação (bg-primary, text-white).
        
        Certifique-se que o conteúdo cabe visualmente em um post de redes sociais (texto curto e direto).`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "Título curto do slide" },
                content: { type: Type.STRING, description: "Texto principal do slide (max 150 caracteres)" },
                highlight: { type: Type.STRING, description: "Uma palavra ou frase curta de destaque (badge)" },
                footer: { type: Type.STRING, description: "Rodapé (ex: @seu_perfil)" },
                bgColor: { type: Type.STRING, enum: ["bg-secondary", "bg-white", "bg-primary"], description: "Classe Tailwind de cor de fundo" },
                textColor: { type: Type.STRING, enum: ["text-white", "text-slate-900"], description: "Classe Tailwind de cor do texto" }
              },
              required: ["title", "content", "bgColor", "textColor"]
            }
          }
        }
      });

      const generatedSlides = JSON.parse(response.text || "[]");
      
      if (generatedSlides.length > 0) {
        navigate('/resultado', { 
          state: { 
            slides: generatedSlides, 
            topic: selectedTopic 
          } 
        });
      } else {
        throw new Error("Nenhum slide gerado");
      }

    } catch (error) {
      console.error("Erro ao gerar:", error);
      alert("Ocorreu um erro ao gerar o carrossel. Por favor, tente novamente.");
    } finally {
      setIsGenerating(false);
    }
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
                Gerando Conteúdo com IA...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Gerar Carrossel
              </>
            )}
          </button>
        </div>
        
        <div className="mt-8 text-center">
             <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
               <AlertCircle className="w-3 h-3" />
               Powered by Google Gemini 2.5 Flash
             </p>
        </div>
      </div>
    </div>
  );
};

export default Gerador;