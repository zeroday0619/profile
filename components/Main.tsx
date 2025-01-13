import type { ReactNode } from 'react'


type LayoutProps = {
  children: ReactNode
}

export default function Main({ children }: LayoutProps) {
    return (
        <>
            <main className="mb-28 mt-4 flex flex-row items-center cursor-pointer">
                <div className="content">{children}</div>
            </main>
        </>
    );
}