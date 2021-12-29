import { motion } from "framer-motion";

// COMPONENTS
import Layout from "../UI/Layout";
import GameInfo from "./GameInfo";
import PublishersList from "./PublishersList";
import PlatformsList from "./PlatformsList";
import RedditInfo from "./RedditInfo";

// STYLES
import styles from "./GameDetails.module.scss";

interface GameInfo {
      gameInfo: {
            data: {
                  id: number;
                  name: string;
                  description_raw: string;
                  website: string;
                  publishers: [];
                  parent_platforms: [];
                  reddit_name: string;
                  reddit_description: string;
                  reddit_logo: string;
                  reddit_url: string;
            };
            error: boolean;
      };
}

const GameDetails = (props: GameInfo) => {
      return (
            <>
                  {props.gameInfo.error === false && (
                        <Layout>
                              <motion.section className={styles.container}>
                                    <GameInfo
                                          gameName={props.gameInfo.data.name}
                                          gameDescription={props.gameInfo.data.description_raw}
                                          gameWebsite={props.gameInfo.data.website}
                                    />

                                    <PublishersList publishers={props.gameInfo.data.publishers} />
                                    <PlatformsList platforms={props.gameInfo.data.parent_platforms} />
                                    <RedditInfo
                                          logo={props.gameInfo.data.reddit_logo}
                                          name={props.gameInfo.data.reddit_name}
                                          description={props.gameInfo.data.reddit_description}
                                          url={props.gameInfo.data.reddit_url}
                                    />
                              </motion.section>
                        </Layout>
                  )}
            </>
      );
};

export default GameDetails;
