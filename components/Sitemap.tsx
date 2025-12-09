import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ExternalLink, Smartphone, Layout } from 'lucide-react';

const Sitemap: React.FC = () => {
  const routes = [
    { 
      path: '/lp-financas', 
      label: 'Landing Page (Produção)', 
      icon: <Layout className="w-5 h-5" />,
      desc: 'Página principal de vendas e apresentação.'
    },
    { 
      path: '/gerador', 
      label: 'Gerador de Carrossel', 
      icon: <Smartphone className="w-5 h-5" />,
      desc: 'Interface do SaaS para criação de conteúdo.'
    },
    { 
      path: '/resultado', 
      label: 'Resultado (Demo)', 
      icon: <ExternalLink className="w-5 h-5" />,
      desc: 'Visualização final do carrossel gerado.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-100 rounded-lg text-primary">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-secondary">Mapa de Navegação</h1>
            <p className="text-sm text-slate-500">Ambiente de Desenvolvimento</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
          Você está vendo esta página porque o sistema detectou um ambiente de <strong>Preview/Proxy</strong>. O roteamento foi ajustado para <strong>HashRouter</strong>.
        </p>

        <div className="space-y-3">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-indigo-100 transition-all group"
            >
              <div className="mt-1 text-slate-400 group-hover:text-primary transition-colors">
                {route.icon}
              </div>
              <div>
                <span className="font-semibold text-slate-800 group-hover:text-primary block">
                  {route.label}
                </span>
                <span className="text-xs text-slate-500 mt-1 block">
                  {route.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
