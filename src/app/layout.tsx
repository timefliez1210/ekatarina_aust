import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Logica',
    description: 'Interior Design'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
