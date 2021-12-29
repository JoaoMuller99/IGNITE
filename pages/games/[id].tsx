import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

// WS
import commWS from "../../interface/interface_ws";

// COMPONENTS
import GameDetails from "../../components/Games/GameDetails";

const GameDetail: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
      const router = useRouter();

      if (router.isFallback) {
            return <h1>Loading...</h1>;
      }

      console.log(props.currentGame);

      return (
            <div>
                  <Head>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                        <title>Ignite | {props.currentGame.data.name}</title>
                  </Head>

                  <main>
                        <GameDetails gameInfo={props.currentGame} />
                  </main>
            </div>
      );
};

export const getStaticPaths: GetStaticPaths = async () => {
      const result = await commWS.current_games();

      interface Game {
            id: number;
      }

      const paths = result.data.map((game: Game) => {
            return { params: { id: game.id.toString() } };
      });

      return {
            paths: paths,
            fallback: true,
      };
};

export const getStaticProps: GetStaticProps = async (context) => {
      const result = await commWS.game_detail(context?.params?.id!);

      if (result.error) {
            return {
                  notFound: true,
            };
      }

      return {
            props: {
                  currentGame: result,
            },
            revalidate: 604800, // 1 week
      };
};

export default GameDetail;