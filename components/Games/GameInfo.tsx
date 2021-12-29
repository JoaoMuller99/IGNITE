// LIBRARIES
import { motion } from "framer-motion";

// STYLES
import styles from "./GameInfo.module.scss";

interface GameInfoProps {
      gameName: string;
      gameDescription: string;
      gameWebsite: string;
}

const GameInfo = (props: GameInfoProps) => {
      return (
            <motion.div>
                  {props.gameName && <h1 className={styles.h1}>{props.gameName}</h1>}
                  {props.gameDescription && <p>{props.gameDescription}</p>}
                  {props.gameWebsite && (
                        <div>
                              <p>Website: </p>
                              <a href={props.gameWebsite} rel="noreferrer" target="_blank">
                                    {props.gameWebsite}
                              </a>
                        </div>
                  )}
            </motion.div>
      );
};

export default GameInfo;
