import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Syringe,
  Scissors,
  FlaskConical,
  HeartPulse,
  Bath,
  Microscope,
  Activity,
  Pill,
  Baby,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Clínica Veterinária Dr. Marco Antônio" },
      { name: "description", content: "Consultas, exames laboratoriais, vacinação, banho e tosa, cirurgias e mais. Conheça todos os nossos serviços." },
      { property: "og:title", content: "Serviços — Dr. Marco Antônio" },
      { property: "og:description", content: "Tudo o que seu pet precisa em um só lugar." },
    ],
  }),
  component: ServicosPage,
});

const categorias = [
  {
    title: "Consultas & Atendimento",
    icon: Stethoscope,
    items: [
      { icon: Stethoscope, name: "Consulta clínica geral", desc: "Avaliação completa, diagnóstico e plano de cuidado para cães e gatos." },
      { icon: HeartPulse, name: "Atendimento de emergência", desc: "Plantão 24h para urgências clínicas e cirúrgicas." },
      { icon: Baby, name: "Consulta filhotes & idosos", desc: "Acompanhamento especial para fases sensíveis da vida do pet." },
    ],
  },
  {
    title: "Exames Laboratoriais & Imagem",
    icon: FlaskConical,
    items: [
      { icon: FlaskConical, name: "Exames de sangue e urina", desc: "Hemograma, bioquímico, urinálise — resultados em até 24h." },
      { icon: Microscope, name: "Citologia & parasitologia", desc: "Análises microscópicas com laudo de especialista." },
      { icon: Activity, name: "Ultrassom e Raio-X", desc: "Exames de imagem realizados no local com equipamentos digitais." },
    ],
  },
  {
    title: "Prevenção & Bem-estar",
    icon: Syringe,
    items: [
      { icon: Syringe, name: "Vacinação completa", desc: "Protocolo V8, V10, antirrábica, FeLV e mais — com carteirinha digital." },
      { icon: Pill, name: "Vermifugação & antipulgas", desc: "Indicação personalizada de produtos e calendário de aplicação." },
      { icon: Sparkles, name: "Check-up preventivo", desc: "Pacotes anuais para detectar precocemente qualquer alteração." },
    ],
  },
  {
    title: "Estética & Cirurgia",
    icon: Scissors,
    items: [
      { icon: Bath, name: "Banho & Tosa", desc: "Higiênica, tesoura ou na máquina, com produtos hipoalergênicos." },
      { icon: Scissors, name: "Tosa especializada", desc: "Tosas higiênicas, bebê, leão e raça por profissionais experientes." },
      { icon: HeartPulse, name: "Cirurgias", desc: "Castração, partos, ortopédicas e tecidos moles em centro cirúrgico próprio." },
    ],
  },
];

function ServicosPage() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-80 mb-4">Serviços</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-5">
            Cuidado completo em todas as fases da vida do seu pet
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            Da primeira vacina ao cuidado geriátrico, oferecemos uma estrutura completa
            com profissionais especializados.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl space-y-12 sm:space-y-16">
          {categorias.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="rounded-xl bg-primary text-primary-foreground p-2.5 sm:p-3 shrink-0">
                  <cat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display">{cat.title}</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-soft hover:border-accent/40 transition-all"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold font-display text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gradient-hero text-primary-foreground rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display mb-3">
              Não encontrou o que procurava?
            </h2>
            <p className="opacity-90 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Fale com nossa equipe — montamos um plano de cuidado sob medida para o seu pet.
            </p>
            <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
              <Link to="/contato">Falar com a Clínica</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
