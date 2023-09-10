export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.75,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 1,
      y: 1,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
export const blurOut = (opacity, duration, delay) => {
  return {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: opacity,
      transition: {
        delay: delay,
        duration: duration,
        ease: "linear",
      },
    },
  };
};

export const zoomIn = (scaleView, delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: scaleView,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "linear",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
