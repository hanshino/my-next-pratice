import React, { ReactNode } from "react";
import styles from "./layout.module.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
