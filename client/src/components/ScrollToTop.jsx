import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const smoothScrollToTop = (duration) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, start * (1 - ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  requestAnimationFrame(animateScroll);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollToTop(1000); // Scroll duration in milliseconds
  }, [pathname]);

  return null;
};

export default ScrollToTop;