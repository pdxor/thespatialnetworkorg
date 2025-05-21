import { RefObject } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';

interface AnimationConfig {
  opacity: number;
  transform: string;
}

const animationConfigs: Record<AnimationType, AnimationConfig> = {
  'fade-in-up': {
    opacity: 0,
    transform: 'translateY(40px)',
  },
  'fade-in-down': {
    opacity: 0,
    transform: 'translateY(-40px)',
  },
  'fade-in-left': {
    opacity: 0,
    transform: 'translateX(-40px)',
  },
  'fade-in-right': {
    opacity: 0,
    transform: 'translateX(40px)',
  },
  'zoom-in': {
    opacity: 0,
    transform: 'scale(0.9)',
  },
};

export const applyScrollAnimation = (
  element: HTMLElement | null,
  type: AnimationType = 'fade-in-up',
  delay: number = 0
): void => {
  if (!element) return;

  const config = animationConfigs[type];
  
  // Set initial state
  element.style.opacity = config.opacity.toString();
  element.style.transform = config.transform;
  element.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
  element.style.transitionDelay = `${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a small timeout to ensure the transition works
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0) scale(1)';
          }, 100);
          
          // Unobserve after animation
          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(element);
};