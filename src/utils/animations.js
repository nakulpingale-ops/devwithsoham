// Easing curve inspired by high-end fluid motion
export const premiumEase = [0.22, 1, 0.36, 1];

// Base duration for all primary motion
export const premiumDuration = 0.6;

// Standard stagger timing (120ms rhythm)
export const staggerChildrenDelay = 0.12;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerChildrenDelay,
    },
  },
};

// Text & standard element reveal (y: 32px)
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.985
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: premiumDuration,
      ease: premiumEase,
    },
  },
};

// Larger Hero reveal (slightly more movement)
export const heroReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: premiumEase,
    },
  },
};

// Premium Card Reveal (3D perspective flap)
export const cardReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 12,
    scale: 0.96,
    transformOrigin: "center bottom"
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: premiumDuration,
      ease: premiumEase,
    },
  },
};

// Flip Reveal (full 3D flip as they appear)
export const flipReveal = {
  hidden: {
    opacity: 0,
    rotateY: -90,
    y: 40,
    transformOrigin: "center"
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    transition: {
      duration: premiumDuration,
      ease: premiumEase,
    },
  },
};

// Standard Viewport configuration to use across all sections
// Ensures animations only play once, and trigger confidently
export const defaultViewport = {
  once: true,
  amount: 0.15
};
