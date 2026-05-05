import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

// Definição dos links de navegação
const links = [
  { to: "/", label: "Home" },
  { to: "/a-clinica", label: "A Clínica" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 sm:h-18 items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Identidade Visual / Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img 
            src={logo} 
            alt="Clínica Veterinária Dr. Marco Antônio" 
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shrink-0" 
            width={48} 
            height={48} 
          />
          <div className="block leading-tight min-w-0">
            <p className="font-display text-xs sm:text-sm font-bold text-primary truncate">
              Dr. Marco Antônio
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground truncate">
              Clínica Veterinária
            </p>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Botão de Agendamento Desktop */}
        <div className="hidden md:block">
          <Button asChild variant="cta" size="default">
            <Link to="/contato">Agendar Consulta</Link>
          </Button>
        </div>

        {/* Botão Menu Mobile (Trigger) */}
        <button
          className="md:hidden p-2 text-foreground transition-all"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navegação Mobile (Drawer) */}
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-1 duration-200">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted transition-colors"
                activeProps={{ className: "bg-primary-soft text-primary font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="cta" size="lg" className="mt-3 w-full">
              <Link to="/contato" onClick={() => setOpen(false)}>
                Agendar Consulta
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
