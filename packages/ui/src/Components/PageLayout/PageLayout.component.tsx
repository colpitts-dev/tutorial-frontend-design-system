import React, { ReactNode } from "react";

import { Header } from "../Header";
import "./PageLayout.styles.css";

type User = {
  name: string;
};

export interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: React.VFC<PageLayoutProps> = ({ children }) => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section>{children}</section>
    </article>
  );
};
