import type { Metadata } from 'next';


import { Header } from '@/components/shared/header';


export const metadata: Metadata = {
  title: 'Create Next App',
};


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
    </html>
  );
}
