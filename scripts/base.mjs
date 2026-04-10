// import functions from other modules into all.mjs

import { initLiveClock } from "./liveclock.mjs";

import { initCrypto } from "./cryptoexchangerate.mjs";

import { initDarkMode } from "./modetoggle.mjs";

import { initHamburger } from "./hambutton.mjs";

import { initFooterDate } from "./footer.mjs";

import { initModals } from "./modals.mjs";

// event listener to load the initThankYou function when the DOM content is fully loaded
document.addEventListener(`DOMContentLoaded`, () => {
    initLiveClock();
    initCrypto();
    initDarkMode();
    initHamburger();
    initFooterDate();
    initModals();
});