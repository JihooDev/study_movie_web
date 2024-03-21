import ReactQueryProvider from '@/hooks/useReactQuery';
import ChakraProvider from '@/hooks/useChakraProvider';
import "./globals.css";
import Header from './_components/Header';
import Footer from './_components/Footer'; // 추가된 줄
import { Stack } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ChakraProvider>
          <ReactQueryProvider>
            <Stack w={'100%'} h={'100vh'} gap={0}>
              <Header />
              {children}
              <Footer></Footer>
            </Stack>
          </ReactQueryProvider>
        </ChakraProvider>
      </body>
    </html >
  );
}
