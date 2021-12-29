import Image from "next/image";

interface Publishers {
      id: number;
      name: string;
      image_background: string;
}

interface PublishersList {
      publishers: Publishers[];
}

const PublishersList = (props: PublishersList) => {
      return (
            <>
                  {props.publishers.length !== 0 &&
                        props.publishers.map((publisher) => {
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
      );
};

export default PublishersList;
