import Image from "next/image";

// COMPONENTS
import Layout from "../UI/Layout";

// IMAGES
import PcLogo from "../../public/img/pc.png";
import XboxLogo from "../../public/img/xbox.png";
import PlaystationLogo from "../../public/img/playstation.png";
import DefaultLogo from "../../public/img/default.png";

interface Publishers {
      id: number;
      name: string;
      image_background: string;
}

interface Platforms {
      platform: {
            id: number;
            name: string;
      };
}

interface GameInfo {
      gameInfo: {
            data: {
                  id: number;
                  name: string;
                  description_raw: string;
                  website: string;
                  publishers: Publishers[];
                  parent_platforms: Platforms[];
                  reddit_name: string;
                  reddit_description: string;
                  reddit_logo: string;
                  reddit_url: string;
            };
            error: boolean;
      };
}

const GameDetails = (props: GameInfo) => {
      const platformLogoHandler = (platform: string) => {
            switch (platform) {
                  case "PC":
                        return PcLogo;
                        break;
                  case "Xbox":
                        return XboxLogo;
                        break;
                  case "PlayStation":
                        return PlaystationLogo;
                        break;
                  default:
                        return DefaultLogo;
                        break;
            }
      };

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
                                          <p>Website: {props.gameInfo.data.website}</p>
                                    </>
                              )}

                              {props.gameInfo.data.publishers.length !== 0 && (
                                    <>
                                          <hr />
                                          {props.gameInfo.data.publishers.map((publisher) => {
                                                return (
                                                      <div key={publisher.id}>
                                                            <p>{publisher.name}</p>
                                                            {publisher.image_background && (
                                                                  <Image src={publisher.image_background} width="100px" height="100px" alt={publisher.name} />
                                                            )}
                                                      </div>
                                                );
                                          })}
                                    </>
                              )}

                              {props.gameInfo.data.parent_platforms.length !== 0 && (
                                    <>
                                          <hr />
                                          {props.gameInfo.data.parent_platforms.map((parentPlatform) => {
                                                return (
                                                      <Image
                                                            key={parentPlatform.platform.id}
                                                            src={platformLogoHandler(parentPlatform.platform.name)}
                                                            width="35px"
                                                            height="35px"
                                                            title={parentPlatform.platform.name}
                                                            alt={parentPlatform.platform.name}
                                                      />
                                                );
                                          })}
                                    </>
                              )}

                              {props.gameInfo.data.reddit_url && (
                                    <>
                                          <hr />
                                          {props.gameInfo.data.reddit_logo && (
                                                <Image src={props.gameInfo.data.reddit_logo} width="33px" height="28px" alt="Reddit" />
                                          )}
                                          <p>{props.gameInfo.data.reddit_name}</p>
                                          <p>{props.gameInfo.data.reddit_description}</p>
                                          <p>{props.gameInfo.data.reddit_url}</p>
                                    </>
                              )}
                        </Layout>
                  )}
            </>
      );
};

export default GameDetails;
