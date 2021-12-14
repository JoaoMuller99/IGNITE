import { ReactNode } from "react";

// Styles
import styles from "./Layout.module.scss";

// Libraries
import { motion } from "framer-motion";

interface LayoutProps {
      children: ReactNode;
}

const Layout = (props: LayoutProps) => {
      return <motion.div className={styles.layout}>{props.children}</motion.div>;
};

export default Layout;
