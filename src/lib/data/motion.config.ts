export const transitionConfig = {
  duration: 0.8,
  ease: "easeOut",
  type: "spring",
};

export const animateTextContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      type: "spring",
      staggerChildren: 0.1,
    },
  },
};

export const animateText = {
  hidden: { opacity: 0, marginTop: 100 },
  show: { opacity: 1, marginTop: 0 },
};

export const styleIcon = {
  width: 24,
  height: 24,
};
