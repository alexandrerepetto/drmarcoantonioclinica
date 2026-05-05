import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, Target, Sparkles, Award } from "lucide-react";

// Importação de Assets (Imagens da Equipe)
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

// Configuração da Rota e Metadados (SEO)
export const Route = createFileRoute("/a-clinica")({
  head: () => ({
    meta: [
      { title: "A Clínica — Dr. Marco Antônio Veterinária" },
      { name: "description", content: "Conheça nossa história, missão, valores e a equipe especializada que cuida do seu pet." },
      { property: "og:title", content: "A Clínica — Dr. Marco Antônio" },
      { property: "og:description", content: "História, missão e equipe especializada." },
    ],
  }),
  component: ClinicaPage,
});

// --- DADOS DA PÁGINA (Mantidos integralmente) ---

const team = [
  { img: team1, name: "Dr. Marco Antônio", role: "Veterinário Clínico & Cirurgião", crmv: "CRMV-SP 12345" },
  { img: team2, name: "Dra. Camila Ferraz", role: "Especialista em Felinos", crmv: "CRMV-SP 23456" },
  { img: team3, name: "Bianca Moraes", role: "Esteticista Animal Sênior", crmv: "Banho & Tosa" },
];

const values = [
  { icon: Heart, title: "Empatia", desc: "Cada pet é tratado com o mesmo carinho que dedicamos aos nossos." },
  { icon: Target, title: "Excelência", desc: "Diagnósticos precisos e protocolos atualizados pela medicina baseada em evidências." },
  { icon: Sparkles, title: "Transparência", desc: "Comunicação clara com tutores em cada etapa do tratamento." },
  { icon: Award, title: "Compromisso", desc: "Educação continuada e investimento constante em estrutura e tecnologia." },
];

// --- COMPONENTE PRINCIPAL ---

function ClinicaPage() {
  return (
    <Layout>
      {/* 1. HERO SECTION - Título da Página */}
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-80 mb-4">
            A Clínica
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-5">
            Mais de 15 anos cuidando de quem você ama.
          </h1>
          <p className="text-base sm:text-lg opacity-90 leading-relaxed">
            Uma clínica nascida do propósito de unir medicina veterinária de alto nível
            com o acolhimento que cada família e cada pet merecem.
          </p>
        </div>
      </section>

      {/* 2. HISTÓRIA E MISSÃO */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Nossa história</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Do sonho à referência regional</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                A Clínica Veterinária Dr. Marco Antônio nasceu em 2009 do desejo de oferecer um atendimento
                que combinasse técnica apurada e relação humana. Começamos pequenos, com uma sala de
                consulta e um sonho grande.
              </p>
              <p>
                Hoje somos referência no cuidado de cães e gatos, com estrutura completa de exames,
                centro cirúrgico, internação e plantão 24h. Mas o que realmente nos move continua o mesmo:
                <strong className="text-foreground"> o vínculo com cada tutor e cada animal que entra por nossa porta.</strong>
              </p>
            </div>
          </div>

          {/* Cards de Missão e Visão */}
          <div className="grid gap-5">
            <div className="bg-primary-soft rounded-2xl p-6 border border-primary/10 transition-colors hover:bg-primary-soft/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary text-primary-foreground p-3 shrink-0">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg mb-1.5 text-foreground">Missão</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Promover saúde, bem-estar e qualidade de vida para animais de estimação
                    com excelência clínica e acolhimento humano.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card border border-border transition-shadow hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-accent text-accent-foreground p-3 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-lg mb-1.5 text-foreground">Visão</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ser reconhecida como a clínica veterinária mais confiável e
                    acolhedora da região, referência em medicina preventiva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALORES - Grade de Destaques */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Valores</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">O que nos guia todos os dias</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 border border-border shadow-card hover:border-accent/30 transition-colors">
                <v.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold font-display text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EQUIPE - Galeria de Profissionais */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Equipe</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">Profissionais apaixonados pelo que fazem</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="group cursor-default">
                <div className="overflow-hidden rounded-2xl shadow-card aspect-square mb-5 bg-primary-soft">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                  {m.name}
                </h3>
                <p className="text-primary font-medium text-sm">{m.role}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{m.crmv}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
