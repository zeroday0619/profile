import type { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => (
  <main className="mb-auto mt-0 mr-0">
    <div className="content">{children}</div>
  </main>
);

export default Main;