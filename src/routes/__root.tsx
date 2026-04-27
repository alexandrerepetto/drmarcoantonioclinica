import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clínica Veterinária Dr. Marco Antônio" },
      { name: "description", content: "Cuidado veterinário humanizado em São Paulo. Consultas, exames, vacinação, banho e tosa, cirurgias." },
      { name: "author", content: "Clínica Dr. Marco Antônio" },
      { property: "og:title", content: "Clínica Veterinária Dr. Marco Antônio" },
      { property: "og:description", content: "Cuidado veterinário humanizado em São Paulo. Consultas, exames, vacinação, banho e tosa, cirurgias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica Veterinária Dr. Marco Antônio" },
      { name: "twitter:description", content: "Cuidado veterinário humanizado em São Paulo. Consultas, exames, vacinação, banho e tosa, cirurgias." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/39cc3fc2-82c7-409f-9222-294aa5f28955/id-preview-d481e928--3a15072a-7b10-4978-ae2e-00db29278739.lovable.app-1777307324985.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/39cc3fc2-82c7-409f-9222-294aa5f28955/id-preview-d481e928--3a15072a-7b10-4978-ae2e-00db29278739.lovable.app-1777307324985.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
