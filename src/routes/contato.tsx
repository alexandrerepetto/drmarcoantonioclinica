import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Clínica Veterinária Dr. Marco Antônio" },
      { name: "description", content: "Agende uma consulta. Telefone, WhatsApp, endereço e horário de funcionamento." },
      { property: "og:title", content: "Contato — Dr. Marco Antônio" },
      { property: "og:description", content: "Fale com a Clínica e agende a consulta do seu pet." },
    ],
  }),
  component: ContatoPage,
});

const blocks = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "(11) 99876-5432",
    desc: "Resposta em minutos",
    href: "https://wa.me/5511998765432?text=Ol%C3%A1!%20Gostaria%20de%20agendar.",
    cta: "Conversar agora",
    accent: true,
  },
  {
    icon: Phone,
    title: "Telefone",
    primary: "(11) 4002-8922",
    desc: "Atendimento comercial",
    href: "tel:+551140028922",
    cta: "Ligar",
  },
  {
    icon: Mail,
    title: "E-mail",
    primary: "contato@drmarcoantonio.vet.br",
    desc: "Retorno em até 24h",
    href: "mailto:contato@drmarcoantonio.vet.br",
    cta: "Enviar e-mail",
  },
];

function ContatoPage() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] opacity-80 mb-4">Contato</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-5">
            Vamos cuidar do seu pet juntos
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            Agende uma consulta pelo canal que preferir. Estamos prontos para atender você.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {blocks.map((b) => (
              <div
                key={b.title}
                className={`rounded-2xl p-7 border shadow-card flex flex-col ${
                  b.accent ? "bg-gradient-cta text-accent-foreground border-transparent" : "bg-card border-border"
                }`}
              >
                <b.icon className={`h-8 w-8 mb-4 ${b.accent ? "" : "text-accent"}`} />
                <p className={`text-xs uppercase tracking-widest mb-2 ${b.accent ? "opacity-90" : "text-muted-foreground"}`}>
                  {b.title}
                </p>
                <p className="font-bold font-display text-xl mb-1 break-words">{b.primary}</p>
                <p className={`text-sm mb-6 flex-1 ${b.accent ? "opacity-90" : "text-muted-foreground"}`}>{b.desc}</p>
                <Button
                  asChild
                  variant={b.accent ? "hero" : "default"}
                  size="default"
                  className="w-full"
                >
                  <a href={b.href} target={b.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {b.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card">
              <h2 className="text-2xl font-bold font-display mb-6">Onde estamos</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="rounded-lg bg-primary-soft text-primary p-2.5 h-fit">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5">Endereço</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Av. Paulista, 1500 — Bela Vista<br />São Paulo / SP — CEP 01310-100
                    </p>
                    <a
                      href="https://maps.google.com/?q=Av.+Paulista,+1500,+Bela+Vista,+São+Paulo"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-accent font-medium hover:underline mt-1 inline-block"
                    >
                      Ver no Google Maps →
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="rounded-lg bg-primary-soft text-primary p-2.5 h-fit">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5">Horário de funcionamento</p>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>Segunda a Sexta: <strong className="text-foreground">08h às 18h</strong></li>
                      <li>Sábado: <strong className="text-foreground">08h às 12h</strong></li>
                      <li>Domingo: <strong className="text-foreground">Plantão 24h</strong></li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="rounded-lg bg-primary-soft text-primary p-2.5 h-fit">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-0.5">Contatos</p>
                    <p className="text-muted-foreground text-sm">
                      Fixo: (11) 4002-8922<br />
                      WhatsApp: (11) 99876-5432
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card border border-border min-h-[300px] sm:min-h-[400px]">
              <iframe
                title="Mapa da clínica"
                src="https://www.google.com/maps?q=Av.+Paulista,+1500,+Bela+Vista,+São+Paulo&output=embed"
                className="w-full h-full min-h-[300px] sm:min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
