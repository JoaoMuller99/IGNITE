import axios, { AxiosError } from "axios";

class InterfaceWS {
      DEBUG: boolean;
      API_KEY: string;
      URL: string;

      constructor() {
            this.DEBUG = true;
            this.API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY!;
            this.URL = `https://api.rawg.io/api`;
      }

      communication = async (endpoint: string, filter: string) => {
            const _url_ = `${this.URL}/${endpoint}?key=${this.API_KEY}${filter}`;

            this.DEBUG && console.log("WS started");
            this.DEBUG && console.log(_url_);
            this.DEBUG && console.log("WS ended");

            try {
                  const data = await axios.get(_url_);

                  if (data.statusText.toLowerCase() === "ok") {
                        return { error: false, data: data.data };
                  } else {
                        throw Error("Could not fetch the data!");
                  }
            } catch (error: AxiosError | any) {
                  return {
                        data: error.message,
                        error: true,
                  };
            }
      };

      current_games = async () => {
            const date = new Date();
            const year = date.getFullYear();

            const result = await this.communication("games", `&dates=${year}-01-01,${year}-12-31&page_size=21&ordering=-rating`);

            if (result.error) {
                  return result;
            } else {
                  return { error: false, data: result.data.results };
            }
      };

      game_detail = async (gameID: string | string[]) => {
            const result = await this.communication(`games/${gameID}`, "");

            return result;
      };
}

const commWS = new InterfaceWS();

export default commWS;
