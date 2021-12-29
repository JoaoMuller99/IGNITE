import Image from "next/image";

// LIBRARIES
import { motion } from "framer-motion";

interface RedditProps {
      logo: string;
      name: string;
      description: string;
      url: string;
}

const RedditInfo = (props: RedditProps) => {
      return (
            <>
                  {props.url && (
                        <motion.div>
                              {props.logo && <Image src={props.logo} width="33px" height="28px" alt="Reddit" />}
                              <p>{props.name}</p>
                              <p>{props.description}</p>
                              <a href={props.url} rel="noreferrer" target="_blank">
                                    {props.url}
                              </a>
                        </motion.div>
                  )}
            </>
      );
};

export default RedditInfo;
