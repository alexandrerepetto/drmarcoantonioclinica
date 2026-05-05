import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16 sm:mt-24 pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-10 sm:py-14 sm:px-6 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Coluna 1: Branding e Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-12 rounded-full bg-white" 
              width={48} 
              height={48} 
              loading="lazy" 
            />
            <div>
              <p className="font-display font-bold">Dr. Marco Antônio</p>
              <p className="text-xs opacity-80 uppercase tracking-widest">Clínica Veterinária</p>
            </div>
          </div>
          <p className="text-sm opacity-85 leading-relaxed">
            Cuidado veterinário humanizado, com profissionais especializados e estrutura completa para o bem-estar do seu pet.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-base">Navegação</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:opacity-100 hover:underline">Home</Link></li>
            <li><Link to="/a-clinica" className="hover:opacity-100 hover:underline">A Clínica</Link></li>
            <li><Link to="/servicos" className="hover:opacity-100 hover:underline">Serviços</Link></li>
            <li><Link to="/contato" className="hover:opacity-100 hover:underline">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Informações de Contato */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-base">Contato</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p>(11) 4002-8922</p>
                <p>(11) 99876-5432 — WhatsApp</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <span>contato@drmarcoantonio.vet.br</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <a
                href="https://maps.google.com/?q=Av.+Paulista,+1500,+Bela+Vista,+São+Paulo"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Av. Paulista, 1500 — Bela Vista<br />São Paulo / SP
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Horários */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-base">Horário</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <p>Seg a Sex: 08h às 18h</p>
                <p>Sábado: 08h às 12h</p>
                <p>Domingo: Plantão 24h</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior: Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5 text-xs opacity-75 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Clínica Veterinária Dr. Marco Antônio. Todos os direitos reservados.</p>
          <p>CRMV-SP 12345</p>
        </div>
      </div>
    </footer>
  );
}
