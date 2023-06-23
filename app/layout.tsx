import ToasterProvider from '@/providers/ToasterProvider'
import './globals.css'
import Navbar from '@/components/Navbar';
import ModalProvider from '@/providers/ModalProvider';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gallery of Glosses',
  description: 'Explore Glosses and Manuscripts',
}

export const revalidate = 0;

export default async function RootLayout({ children }: {children: React.ReactNode }) {

    return (
        <html lang="en">
            <body>
                <ToasterProvider />
                <ModalProvider />
                <Navbar>
                    {children}
                    <Footer />
                </Navbar>
            </body>
        </html>
    )
}
