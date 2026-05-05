import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

// Definindo a interface para as propriedades do componente
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/10">
      {/* 1. Topo do Site */}
      <Header />
      
      {/* 2. Conteúdo Principal (que muda de página para página) */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* 3. Rodapé do Site */}
      <Footer />
      
      {/* 4. Elementos Flutuantes (fixos na tela) */}
      <WhatsAppFloat />
    </div>
  );
}
