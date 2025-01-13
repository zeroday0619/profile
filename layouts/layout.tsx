import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import type { ReactNode } from 'react'


type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Main children={children} />
            <Footer />
        </>
    );
}