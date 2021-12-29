import { ReactNode } from "react";

// Styles
import styles from "./Layout.module.scss";

// Libraries
import { motion } from "framer-motion";

// ANIMATIONS
import { fadeInUp } from "../../animations";

interface LayoutProps {
      children: ReactNode;
}

const Layout = (props: LayoutProps) => {
      return (
            <motion.div variants={fadeInUp} initial="hidden" animate="show" exit="exit" className={styles.layout}>
                  {props.children}
            </motion.div>
      );
};

export default Layout;
