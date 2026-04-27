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
import heroVet from "@/assets/hero-vet.jpg";
import pet1 from "@/assets/pet-1.jpg";
import pet2 from "@/assets/pet-2.jpg";
import pet3 from "@/assets/pet-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Veterinária Dr. Marco Antônio — Cuidado humanizado para seu pet" },
      {
        name: "description",
        content:
          "Consultas, exames, vacinação, banho e tosa e cirurgias com profissionais especializados. Agende online pelo WhatsApp.",
      },
      { property: "og:title", content: "Clínica Veterinária Dr. Marco Antônio" },
      { property: "og:description", content: "Cuidado veterinário humanizado em São Paulo." },
    ],
  }),
  component: HomePage,
});

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

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <Heart className="h-3.5 w-3.5 fill-current" /> Cuidado humanizado
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.05]">
              O melhor cuidado para quem é parte da sua família.
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Há mais de 15 anos cuidando da saúde e do bem-estar de cães e gatos com
              profissionais especializados, estrutura completa e muito amor.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="cta" size="xl">
                <a
                  href="https://wa.me/5511998765432?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar Consulta <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <Link to="/servicos">Ver Serviços</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" /> CRMV-SP 12345</div>
              <div className="flex items-center gap-2"><Star className="h-5 w-5 text-accent fill-accent" /> 4.9 / 5 (320+)</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
            <img
              src={heroVet}
              alt="Veterinária sorrindo abraçando um cachorro golden retriever"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -left-5 bg-card text-card-foreground rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[260px]">
              <div className="rounded-full bg-accent/15 p-2.5">
                <Heart className="h-5 w-5 text-accent fill-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-primary">+5.000</p>
                <p className="text-xs text-muted-foreground">pets atendidos com amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUMO PROFISSIONAL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Nosso diferencial</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
              Medicina veterinária com olhar humano e técnica de ponta.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Liderada pelo <strong className="text-foreground">Dr. Marco Antônio</strong>, veterinário com mais de 15 anos
              de experiência clínica e cirúrgica, nossa clínica une tecnologia, estrutura completa
              e atendimento acolhedor — porque entendemos que cada pet é único.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trabalhamos com agendamento ágil, exames no local e plantão 24h para emergências.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { n: "15+", l: "anos de experiência" },
                { n: "5k+", l: "pets atendidos" },
                { n: "24h", l: "plantão emergência" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-accent pl-4">
                  <p className="text-3xl font-bold font-display text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={pet1} alt="Cachorrinho feliz na consulta" width={800} height={800} loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover w-full row-span-2 h-full" />
            <img src={pet2} alt="Gato laranja na mesa de exame" width={800} height={800} loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover w-full" />
            <img src={pet3} alt="Cãozinho branco após banho e tosa" width={800} height={800} loading="lazy" className="rounded-2xl shadow-card aspect-square object-cover w-full" />
          </div>
        </div>
      </section>

      {/* DESTAQUE DE SERVIÇOS */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Tudo o que seu pet precisa em um só lugar
            </h2>
            <p className="text-muted-foreground mt-4">
              Estrutura completa para acompanhar cada fase da vida do seu animal.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/servicos">Ver todos os serviços <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              O que nossos tutores dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-7 shadow-card border border-border flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 italic leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Pronto para agendar a consulta do seu pet?
              </h2>
              <p className="opacity-90 text-lg mb-8">
                Atendimento ágil, sem filas e com toda atenção que seu melhor amigo merece.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="cta" size="xl">
                  <a href="https://wa.me/5511998765432" target="_blank" rel="noreferrer">
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outlineLight" size="xl">
                  <a href="tel:+551140028922"><Phone className="h-5 w-5" /> (11) 4002-8922</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
