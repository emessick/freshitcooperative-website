// Basic enhancements and splash screen removal timing
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  if (splash) {
    // Ensure splash is removed from the DOM after animation completes
    setTimeout(() => splash.parentNode && splash.parentNode.removeChild(splash), 3200);
  }
});

/**
 * Optional: Swap the CSS splash for a real video intro.
 * 1) Place an MP4/WebM at /assets/img/logo-splash.mp4
 * 2) Add this markup inside #splash:
 *    <video id="splashVideo" autoplay muted playsinline>
 *      <source src="/assets/img/logo-splash.mp4" type="video/mp4">
 *    </video>
 * 3) Adjust CSS to size #splashVideo similarly to .splash-logo.
 */
