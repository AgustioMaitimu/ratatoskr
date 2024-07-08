import Head from 'next/head';
import './globals.css';
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
