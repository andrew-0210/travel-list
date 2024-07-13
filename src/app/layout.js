import { quicksand } from './fonts';
import './globals.css';

export const metadata = {
  title: 'Far Away',
  description: 'A Travel Packaging App',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} `}>{children}</body>
    </html>
  );
}
