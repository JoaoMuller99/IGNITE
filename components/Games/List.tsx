import type { AppProps } from "next/app";

// Libraries
import { motion } from "framer-motion";

// Components
import Layout from "../UI/Layout";
import Game from "./Game";

// Styles
import styles from "./List.module.scss";

interface dataArray {
      id: number;
      name: string;
      released: string;
      background_image: string;
      short_screenshots: [];
}

interface ListProps {
      currentGames: { error: boolean; data: [dataArray] };
      classification: string;
}

const List = (props: ListProps) => {
      return (
            <Layout>
                  <h2 className={styles.h2}>{props.classification}</h2>
                  <motion.div className={styles.container}>
                        {!props.currentGames.error &&
                              props.currentGames.data.map((game) => (
                                    <Game
                                          key={game.id}
                                          id={game.id}
                                          name={game.name}
                                          released={game.released}
                                          backgroundImage={
                                                "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                          }
                                          // backgroundImage={game.background_image}
                                          screenshots={game.short_screenshots}
                                    />
                              ))}
                        {props.currentGames.error && <h2>{props.currentGames.data}</h2>}
                  </motion.div>
            </Layout>
      );
};

export default List;
