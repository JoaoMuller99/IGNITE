import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

// COMPONENTS
import List from "../components/Games/List";

// WS
import commWS from "../interface/interface_ws";

// LIBRARIES
import { motion } from "framer-motion";

// ANIMATIONS
import { fadeInUp } from "../animations";

const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
      return (
            <>
                  <Head>
                        <meta
                              name="description"
                              content="Are you a true gamer? If so, Ignite your experience in the gaming world with this exciting application. For gamers, by gamers!"
                        />
                        <link rel="icon" href="/favicon.ico" />
                        <title>Ignite</title>
                  </Head>

                  <motion.div variants={fadeInUp} initial="hidden" animate="show" exit="exit">
                        <List classification="Games" currentGames={props.currentGames} />
                  </motion.div>
            </>
      );
};

export const getStaticProps: GetStaticProps = async () => {
      const result = await commWS.current_games();

      return {
            props: {
                  currentGames: result,
            },
            revalidate: 604800, // 1 week
      };
};

export default Home;
