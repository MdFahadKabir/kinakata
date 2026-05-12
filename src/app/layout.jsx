import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { Navbar } from "../components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s | BrokerEdge',
    default: 'BrokerEdge | Advanced Market Analytics',
  },
  description: 'Advanced stock screeners, heatmaps, charts and data table solutions for professional share market traders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
