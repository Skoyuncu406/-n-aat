import "./globals.css";

export const metadata = {
  title: "Prestij İnşaat | Kurumsal İnşaat Firması",
  description:
    "Modern, güvenilir ve kaliteli inşaat projeleri geliştiren kurumsal firma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
