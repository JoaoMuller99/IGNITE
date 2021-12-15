import { useRef } from "react";
import Image from "next/image";

// Libraries
import { motion } from "framer-motion";
import gsap from "gsap";

// Styles
import styles from "./Game.module.scss";

interface GameProps {
      id: number;
      name: string;
      released: string;
      backgroundImage: string;
      screenshots: [];
}

interface Screenshots {
      id: number;
      image: string;
}

const Game = (props: GameProps) => {
      const imgContainer = useRef<HTMLDivElement>(null);

      const handleFinish = () => {
            const length = (imgContainer.current?.children || []).length;

            for (let i = 0; i < length; i++) {
                  gsap.to(imgContainer.current?.children[i]!, { opacity: 1, duration: 0 });
            }
      };

      const handleMouseEnter = () => {
            const timeline = gsap.timeline();
            const length = (imgContainer.current?.children || []).length;

            timeline.to(imgContainer.current?.children[0]!, { opacity: 0, duration: 0 });

            for (let i = 1; i < length - 1; i++) {
                  timeline.to(imgContainer.current?.children[i]!, { opacity: 0, duration: 1.3 });
            }

            const killTimeline = () => {
                  timeline.kill();
                  handleFinish();
                  imgContainer.current?.removeEventListener("mouseleave", killTimeline);
            };

            imgContainer.current?.addEventListener("mouseleave", killTimeline);
      };

      return (
            <motion.div className={styles.container} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <h2 className={styles.h2}>{props.name}</h2>
                  <p className={styles.p}>{props.released}</p>
                  <div ref={imgContainer} className={styles.imgContainer} onMouseEnter={handleMouseEnter}>
                        <Image className={styles.img} src={props.backgroundImage} alt="Game Image" width="1024" height="720" />
                        {props.screenshots.map((screenshot: Screenshots, index: number) => {
                              return (
                                    <div key={screenshot.id} className={styles.carouselContainer} style={{ zIndex: 9 - index }}>
                                          <Image className={styles.screenshots} src={screenshot.image} alt="Screenshot" width="1024" height="720" />
                                    </div>
                              );
                        })}
                  </div>
            </motion.div>
      );
};

export default Game;
