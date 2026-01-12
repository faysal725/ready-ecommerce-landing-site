'use client';

export const useScrollTo = () => {
  const scrollToSection = (sectionId, offset = 100) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      const marginTop = offset;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - marginTop;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Updates URL hash without triggering a page jump/refresh
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return { scrollToSection };
};