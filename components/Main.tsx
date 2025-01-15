import type { ReactNode } from 'react'


type LayoutProps = {
  children: ReactNode
}

export default function Main({ children }: LayoutProps) {
    return (
        <>
            <main className="mb-auto mt-0 mr-0">
                <div className="content">{children}</div>
            </main>
        </>
    );
}