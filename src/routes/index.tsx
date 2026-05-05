import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Syringe,
  Scissors,
  FlaskConical,
  Heart,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";

// Importação de Imagens
import heroVet from "@/assets/hero-vet.jpg";
import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";

// Configuração da Rota e SEO da Home
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Veterinária Dr. Marco Antônio — Cuidado humanizado para seu pet" },
      {
        name: "description",
        content: "Consultas, exames, vacinação, banho e tosa e cirurgias com profissionais especializados. Agende online pelo WhatsApp.",
      },
      { property: "og:title", content: "Clínica Veterinária Dr. Marco Antônio" },
      { property: "og:description", content: "Cuidado veterinário humanizado em São Paulo." },
    ],
  }),
  component: HomePage,
});

// --- DADOS DINÂMICOS (Mantidos Integralmente) ---

const services = [
  { icon: Stethoscope, title: "Consultas", desc: "Atendimento clínico geral com diagnóstico preciso e plano de cuidado individualizado." },
  { icon: Syringe, title: "Vacinação", desc: "Protocolo completo de vacinas para cães e gatos, com carteirinha digital." },
  { icon: FlaskConical, title: "Exames", desc: "Laboratório próprio, ultrassom e raio-X com resultados em até 24h." },
  { icon: Scissors, title: "Banho & Tosa", desc: "Estética animal feita com produtos hipoalergênicos e muito carinho." },
];

const testimonials = [
  { name: "Mariana Souza", pet: "Tutora da Lola", text: "Atendimento impecável e muito carinhoso. A Lola adora ir na clínica!", rating: 5 },
  { name: "Rafael Lima", pet: "Tutor do Thor", text: "Profissionais excelentes. Salvaram a vida do meu Thor numa cirurgia delicada.", rating: 5 },
  { name: "Juliana Alves", pet: "Tutora da Mel", text: "Estrutura moderna, equipe super atenciosa e preço justo. Recomendo demais.", rating: 5 },
];

// --- COMPONENTE PRINCIPAL ---

function HomePage() {
  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        {/* Elementos Decorativos de Fundo */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <Heart className="h-3.5 w-3.5 fill-current" /> Cuidado humanizado
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1]">
              O melhor cuidado para quem é parte da sua família.
            </h1>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed">
              Há mais de 15 anos cuidando da saúde e do bem-estar de cães e gatos com
              profissionais especializados, estrutura completa e muito amor.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <Button asChild variant="cta" size="xl" className="w-full sm:w-auto shadow-lg">
                <a
                  href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar Consulta <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
                <Link to="/servicos">Ver Serviços</Link>
              </Button>
            </div>
            {/* Badges de Confiança */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" /> CRMV-SP 12345
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" /> 4.9 / 5 (320+ avaliações)
              </div>
            </div>
          </div>

          <div className="relative mt-2 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl opacity-50" />
            <img
              src={heroVet}
              alt="Veterinária da clínica Dr. Marco Antônio com paciente pet"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]"
            />
            {/* Card Flutuante de Estatística */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 bg-card text-card-foreground rounded-2xl shadow-card p-3 sm:p-4 flex items-center gap-3 max-w-[220px] sm:max-w-[260px] animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="rounded-full bg-accent/15 p-2 sm:p-2.5">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-accent fill-accent" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-display text-primary">+5.000</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">pets atendidos com amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESUMO PROFISSIONAL (DIFERENCIAIS) */}
      <section className="py-14 sm:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Nosso diferencial</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
                Medicina veterinária com olhar humano e técnica de ponta.
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Liderada pelo <strong className="text-foreground">Dr. Marco Antônio</strong>, veterinário com mais de 15 anos
              de experiência clínica e cirúrgica, nossa clínica une tecnologia, estrutura completa
              e atendimento acolhedor — porque entendemos que cada pet é único.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com agendamento ágil, exames no local e plantão 24h para emergências.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {[
                { n: "15+", l: "anos de experiência" },
                { n: "5k+", l: "pets atendidos" },
                { n: "24h", l: "plantão emergência" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-accent pl-4 py-1">
                  <p className="text-3xl font-bold font-display text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Galeria em Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src={pet1} alt="Consulta veterinária" width={800} height={800} loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover w-full row-span-2 h-full hover:scale-[1.02] transition-transform duration-500" />
            <img src={pet2} alt="Exame de imagem" width={800} height={800} loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover w-full hover:scale-[1.02] transition-transform duration-500" />
            <img src={pet3} alt="Pet após banho e tosa" width={800} height={800} loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover w-full hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* 3. DESTAQUE DE SERVIÇOS */}
      <section className="py-14 sm:py-16 lg:py-24 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Tudo o que seu pet precisa em um só lugar
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Estrutura completa para acompanhar cada fase da vida do seu animal.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg" className="px-8 shadow-sm">
              <Link to="/servicos">
                Ver todos os serviços <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. PROVA SOCIAL (DEPOIMENTOS) */}
      <section className="py-14 sm:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              O que nossos tutores dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col transition-shadow hover:shadow-md">
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 italic leading-relaxed flex-1 text-base">
                  "{t.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-bold text-foreground text-lg">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL (AGENDAMENTO) */}
      <section className="py-14 sm:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-hero rounded-3xl p-8 sm:p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
            {/* Círculo Decorativo */}
            <div className="absolute -top-20 -right-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
            
            <div className="relative max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                Pronto para agendar a consulta do seu pet?
              </h2>
              <p className="opacity-90 text-lg md:text-xl">
                Atendimento ágil, sem filas e com toda atenção que seu melhor amigo merece.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4">
                <Button asChild variant="cta" size="xl" className="w-full sm:w-auto shadow-xl hover:scale-105 transition-transform">
                  <a href="https://wa.me/5511998765432" target="_blank" rel="noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto hover:bg-white/10 transition-colors">
                  <a href="tel:+551140028922">
                    <Phone className="mr-2 h-5 w-5" /> (11) 4002-8922
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
