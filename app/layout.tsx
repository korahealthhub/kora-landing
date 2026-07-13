import type { Metadata } from 'next';
import { Sora, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kora Health Hub: Pare de recomeçar toda segunda.',
  description:
    'Treino, alimentação, sono e hábitos em um lugar só. Com um Coach IA que não deixa você parar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
