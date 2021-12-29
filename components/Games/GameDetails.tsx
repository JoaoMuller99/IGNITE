// COMPONENTS
import Layout from "../UI/Layout";
import PublishersList from "./PublishersList";
import PlatformsList from "./PlatformsList";
import RedditInfo from "./RedditInfo";

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
                              {props.gameInfo.data.name && (
                                    <>
                                          <h1>{props.gameInfo.data.name}</h1>
                                    </>
                              )}

                              {props.gameInfo.data.description_raw && (
                                    <>
                                          <hr />
                                          <p>{props.gameInfo.data.description_raw}</p>
                                    </>
                              )}

                              {props.gameInfo.data.website && (
                                    <>
                                          <hr />

                                          <p>
                                                Website:{" "}
                                                <a href={props.gameInfo.data.website} rel="noreferrer" target="_blank">
                                                      {props.gameInfo.data.website}
                                                </a>
                                          </p>
                                    </>
                              )}

                              <hr />
                              <PublishersList publishers={props.gameInfo.data.publishers} />

                              <hr />
                              <PlatformsList platforms={props.gameInfo.data.parent_platforms} />

                              <hr />
                              <RedditInfo
                                    logo={props.gameInfo.data.reddit_logo}
                                    name={props.gameInfo.data.reddit_name}
                                    description={props.gameInfo.data.reddit_description}
                                    url={props.gameInfo.data.reddit_url}
                              />
                        </Layout>
                  )}
            </>
      );
};

export default GameDetails;
