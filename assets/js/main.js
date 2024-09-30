import initMobileNavbar from './initMobileNavbar.js';
import initToc from './initToc.js';
import initHeaderAnchor from './initHeaderAnchor.js';
import initToggleTheme from './initToggleTheme.js';

// Use an async function to handle asynchronous initialization
async function initApp() {
  try {
    // Initialize theme toggle first to avoid flashing
    await initToggleTheme();

    // Initialize other independent features in parallel
    await Promise.all([
      initMobileNavbar(),
      initToc(),
      initHeaderAnchor()
    ]);

    console.log('All modules initialized successfully');
  } catch (error) {
    console.error('Error occurred during initialization:', error);
    // Add error handling logic here, such as displaying an error message to the user
  }
}

document.addEventListener('DOMContentLoaded', initApp);
