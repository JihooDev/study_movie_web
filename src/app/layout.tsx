import ReactQueryProvider from '@/hooks/ReactQueryProvider';
import ChakraProvider from '@/hooks/useChakraProvider';
import "./globals.css";
import 'dayjs/locale/ko';
import dayjs from 'dayjs';

dayjs.locale('ko');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko" translate='no' className="notranslate">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html >
  );
}
