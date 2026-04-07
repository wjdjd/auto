import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutoPublish.com',
  description: 'AI-powered publishing platform',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo/autopublish-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
