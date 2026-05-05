import * as React from "react";

// Ponto de quebra padrão para dispositivos móveis (MD no Tailwind)
const MOBILE_BREAKPOINT = 768;

/**
 * Hook para detectar se o usuário está em um dispositivo móvel.
 * Baseado na largura da janela do navegador.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Cria um ouvinte para a largura da tela
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Adiciona o evento de escuta
    mql.addEventListener("change", onChange);
    
    // Define o estado inicial
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Limpa o evento ao desmontar o componente para evitar vazamento de memória
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Retorna falso por padrão enquanto o estado é undefined (evita erros no carregamento inicial)
  return !!isMobile;
}
