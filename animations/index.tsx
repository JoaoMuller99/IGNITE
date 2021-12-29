export const fadeInUp = {
      hidden: {
            opacity: 0,
            y: 40,
      },
      show: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 0.5,
                  ease: "easeInOut",
            },
      },
      exit: {
            opacity: 0,
            y: 40,
            transition: {
                  duration: 0.5,
                  ease: "easeInOut",
            },
      },
};
