import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { StoreHydration } from '@/components/providers/StoreHydration';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | BrokerEdge',
    default: 'BrokerEdge | Advanced Market Analytics',
  },
  description:
    'Advanced stock screeners, heatmaps, charts and data table solutions for professional share market traders.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <StoreHydration />
        <Navbar />
        <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
