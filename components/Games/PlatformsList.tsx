import Image from "next/image";

// LIBRARIES
import { motion } from "framer-motion";

// IMAGES
import PcLogo from "../../public/img/pc.png";
import XboxLogo from "../../public/img/xbox.png";
import PlaystationLogo from "../../public/img/playstation.png";
import DefaultLogo from "../../public/img/default.png";

interface Platform {
      platform: {
            id: number;
            name: string;
      };
}

interface PlatformsList {
      platforms: Platform[];
}

const PlatformsList = (props: PlatformsList) => {
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
                  {props.platforms.length !== 0 && (
                        <motion.div>
                              {props.platforms.map((parentPlatform) => {
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
                        </motion.div>
                  )}
            </>
      );
};

export default PlatformsList;
