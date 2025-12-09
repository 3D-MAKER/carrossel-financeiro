import React, { useMemo } from 'react';
import { 
  HashRouter, 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate,
  useLocation 
} from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LpFinancas from './pages/LpFinancas';
import Gerador from './pages/Gerador';
import Resultado from './pages/Resultado';

/**
 * UTILITY: checkPreviewEnvironment
 * Detects if the app is running in a cloud IDE or preview proxy.
 */
const checkPreviewEnvironment = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const host = window.location.hostname;
  const href = window.location.href;
  
  const previewIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];

  return previewIndicators.some(indicator => 
    host.includes(indicator) || href.includes(indicator)
  );
};

// Layout wrapper to handle scroll to top on route change
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">{children}</div>;
};

const AppRoutes: React.FC = () => {
  // Recalculate inside component to ensure dynamic redirect logic works
  const isPreview = checkPreviewEnvironment();

  return (
    <Layout>
      <Routes>
        {/* Smart Redirect: Root Path */}
        <Route 
          path="/" 
          element={
            isPreview 
              ? <Navigate to="/sitemap" replace /> 
              : <Navigate to="/lp-financas" replace />
          } 
        />

        {/* Application Routes */}
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/lp-financas" element={<LpFinancas />} />
        <Route path="/gerador" element={<Gerador />} />
        <Route path="/resultado" element={<Resultado />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default function App() {
  // Select Router Strategy once on mount
  const RouterStrategy = useMemo(() => {
    return checkPreviewEnvironment() ? HashRouter : BrowserRouter;
  }, []);

  return (
    <RouterStrategy>
      <AppRoutes />
    </RouterStrategy>
  );
}
