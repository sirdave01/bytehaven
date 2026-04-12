// import functions from other modules into all.mjs

import { initLiveClock } from "./liveclock.mjs";

import { initCrypto } from "./cryptoexchangerate.mjs";

import { initDarkMode } from "./modetoggle.mjs";

import { initFooterDate } from "./footer.mjs";

import { initModals } from "./modals.mjs";

import { organizationSchema } from "./schema.mjs";

function injectSchema() {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(script);
}

// event listener to load the initThankYou function when the DOM content is fully loaded
document.addEventListener(`DOMContentLoaded`, () => {
    initLiveClock();
    initCrypto();
    initDarkMode();
    initFooterDate();
    initModals();
    injectSchema();
});