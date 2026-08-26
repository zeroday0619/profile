import type { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => (
  <main id="main-content" className="site-main" tabIndex={-1}>
    <div className="content">{children}</div>
  </main>
);

export default Main;
