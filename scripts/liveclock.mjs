// Writing the live-clock module to populate the liveclock div in the HTML file

function initLiveClock() {

    const clockEl = document.querySelector('#live-clock');

    if (!clockEl) {

        console.warn('Live clock element not found');

        return;

    }

    function getOrdinal(n) {

        const s = ["th", "st", "nd", "rd"];

        const v = n % 100;

        return n + (s[(v - 20) % 10] || s[v] || s[0]);

    }

    function updateClock() {

        const now = new Date();

        // Day name (e.g. Wednesday)
        const dayName = now.toLocaleString('en-US', { weekday: 'long' });

        // Ordinal date (e.g. 22nd)
        const dateOrdinal = getOrdinal(now.getDate());

        // Month name (e.g. April)
        const monthName = now.toLocaleString('en-US', { month: 'long' });

        // Year
        const year = now.getFullYear();

        // Time (HH:MM:SS)
        const hours = now.getHours().toString().padStart(2, '0');
        
        const minutes = now.getMinutes().toString().padStart(2, '0');
        
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // Final formatted string
        const fullString = `${dayName}, ${dateOrdinal} ${monthName} ${year} ${hours}:${minutes}:${seconds}`;

        clockEl.textContent = fullString;
    }

    updateClock(); // Initial update
    setInterval(updateClock, 1000); // Update every second
}

export { initLiveClock };