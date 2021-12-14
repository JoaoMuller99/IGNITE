import Image from "next/image";

// Libraries
import { motion } from "framer-motion";

// Styles
import styles from "./Game.module.scss";

interface GameProps {
      id: number;
      name: string;
      released: string;
      backgroundImage: string;
}

const Game = (props: GameProps) => {
      return (
            <motion.div className={styles.container} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <h2 className={styles.h2}>{props.name}</h2>
                  <p className={styles.p}>{props.released}</p>
                  <Image className={styles.img} src={props.backgroundImage} alt="Game Image" width="1024" height="720" />
            </motion.div>
      );
};

export default Game;
