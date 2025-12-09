import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Download, Share2, ArrowLeft, Edit2 } from 'lucide-react';
import { Slide } from '../types';

const Resultado: React.FC = () => {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get('topic') || 'investimentos';

  // Mock data generation based on topic
  const getMockSlides = (topic: string): Slide[] => {
    const commonFooter = "@financas.inteligentes";
    
    switch(topic) {
      case 'investimentos':
        return [
          { title: "3 Regras de Ouro", content: "Para começar a investir com pouco dinheiro ainda hoje.", highlight: "Comece Agora", footer: commonFooter, bgColor: "bg-secondary", textColor: "text-white" },
          { title: "1. Reserva de Emergência", content: "Antes de investir em risco, garanta 6 meses do seu custo de vida em liquidez diária.", highlight: "Segurança", footer: commonFooter, bgColor: "bg-white", textColor: "text-slate-900" },
          { title: "2. Juros Compostos", content: "O tempo é seu maior aliado. Começar com R$100 hoje vale mais que R$1000 daqui a 5 anos.", highlight: "Paciência", footer: commonFooter, bgColor: "bg-white", textColor: "text-slate-900" },
          { title: "3. Diversificação", content: "Nunca coloque todos os ovos na mesma cesta. Misture Renda Fixa e Variável.", highlight: "Estratégia", footer: commonFooter, bgColor: "bg-white", textColor: "text-slate-900" },
          { title: "Gostou?", content: "Salve este post para consultar quando for fazer seu aporte mensal!", highlight: "Compartilhe", footer: commonFooter, bgColor: "bg-primary", textColor: "text-white" },
        ];
      default:
        return [
          { title: "Organize suas Finanças", content: "O passo a passo definitivo para sair do vermelho.", highlight: "Método 50/30/20", footer: commonFooter, bgColor: "bg-secondary", textColor: "text-white" },
          { title: "50% Essenciais", content: "Metade da sua renda deve cobrir moradia, alimentação e transporte.", highlight: "Necessidade", footer: commonFooter, bgColor: "bg-white", textColor: "text-slate-900" },
          { title: "30% Desejos", content: "Reserve uma parte para lazer e hobbies. Viver apenas para pagar contas não funciona.", highlight: "Equilíbrio", footer: commonFooter, bgColor: "bg-white", textColor: "text-slate-900" },
          { title: "20% Futuro", content: "Este valor é sagrado. Invista para sua liberdade financeira.", highlight: "Prioridade", footer: commonFooter, bgColor: "bg-white", textColor: "text-slate-900" },
          { title: "Comente 'PLANILHA'", content: "Que eu te envio uma ferramenta automática de controle.", highlight: "Ação", footer: commonFooter, bgColor: "bg-primary", textColor: "text-white" },
        ];
    }
  };

  const slides = getMockSlides(topic);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <Link to="/gerador" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar e Editar</span>
        </Link>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium text-sm">
            <Edit2 className="w-4 h-4" />
            Personalizar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 font-medium text-sm shadow-md shadow-indigo-100">
            <Download className="w-4 h-4" />
            Baixar PDF
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-x-auto p-8 flex items-center gap-8">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`flex-shrink-0 w-[400px] h-[500px] ${slide.bgColor} ${slide.textColor} rounded-none shadow-2xl flex flex-col p-8 relative overflow-hidden`}
          >
             {/* Slide Design Mockup */}
             <div className="flex-1 flex flex-col justify-center z-10">
               {slide.highlight && (
                 <span className="inline-block px-3 py-1 bg-current/10 rounded-full text-xs font-bold tracking-widest uppercase mb-4 w-fit opacity-80">
                   {slide.highlight}
                 </span>
               )}
               <h2 className="text-4xl font-extrabold leading-tight mb-6">
                 {slide.title}
               </h2>
               <p className="text-lg opacity-90 leading-relaxed font-light">
                 {slide.content}
               </p>
             </div>
             
             <div className="mt-auto pt-6 border-t border-current/10 flex justify-between items-center opacity-60 text-sm font-medium">
               <span>{slide.footer}</span>
               <span>{index + 1}/{slides.length}</span>
             </div>

             {/* Decorative Background Element */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-current opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        ))}
        
        {/* Call to Action Card at the end */}
        <div className="flex-shrink-0 w-[400px] h-[500px] bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-xl flex flex-col items-center justify-center p-8 gap-4">
          <h3 className="text-xl font-bold text-secondary">Pronto para postar?</h3>
          <p className="text-center text-slate-500 mb-4">
            Baixe seus carrosséis ou compartilhe diretamente.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <button className="w-full py-3 bg-primary text-white rounded-lg font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-colors">
              Baixar Todas as Imagens (PNG)
            </button>
            <button className="w-full py-3 bg-white text-secondary border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar Link
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resultado;
