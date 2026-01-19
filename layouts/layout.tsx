import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;