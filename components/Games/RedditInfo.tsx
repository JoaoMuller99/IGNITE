import Image from "next/image";

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
                        <>
                              {props.logo && <Image src={props.logo} width="33px" height="28px" alt="Reddit" />}
                              <p>{props.name}</p>
                              <p>{props.description}</p>
                              <a href={props.url} rel="noreferrer" target="_blank">
                                    {props.url}
                              </a>
                        </>
                  )}
            </>
      );
};

export default RedditInfo;
