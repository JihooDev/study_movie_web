import "../../globals.css";
import Header from '../../_components/Header';
import Footer from '../../_components/Footer'; // 추가된 줄

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <Header />
                {children}
            </body>
        </html >
    );
}
