import { useEffect } from 'react';

interface DomElements {
  [key: string]: HTMLElement | null; // HTMLElement or null if not found
}

const Dom = (): DomElements => {
  const domElements: DomElements = {}; // Initialize the object to store DOM elements

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    // Store DOM elements in the domElements object
    sections.forEach((section, index) => {
      domElements[`section${index}`] = section as HTMLElement;
    });

    sectBtns.forEach((btn, index) => {
      domElements[`controls${index}`] = btn as HTMLElement;
    });

    sectBtn.forEach((btn, index) => {
      domElements[`control${index}`] = btn as HTMLElement;
    });

    if (allSections) {
      domElements['mainContent'] = allSections as HTMLElement;
    }

    // Your code that relies on the DOM elements can go here

    // Make sure to clean up any event listeners or other side effects in the useEffect cleanup function
    return () => {
      // Cleanup logic here if needed
    };
  }, []); // Empty dependency array to run the effect only once

  return domElements; // Return the DOM elements object
};

export default Dom;
