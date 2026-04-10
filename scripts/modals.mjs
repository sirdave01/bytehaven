// adding the script that will populate the modals on the page

//     the products modal content that will be displayed when the user clicks on
//     the products button in the navigation bar. It will contain information about the products
//     that we are building at ByteHaven, including HavenSocial, KelSwap, HavenChat, HavenPlay, HavenBook,
//     HavenConverter and our PMK token. and have a boolean variable that detects when it's completed or not
//     example: Ready: true or false. and also have a roadmap for the products that we are building,
//     including the launch dates and the features that will be included in each product.
//     and also have a contact section that will allow users to get in touch with us if they have any questions or ideas.

const productsData = [
    {
        name: 'HavenSocial',
        description: 'Next-generation social platform powered by PMK.',
        logo: 'images/havensocial_logo.webp',
        ready: false
    },
    {
        name: 'KelSwap',
        description: 'Internal DEX for seamless PMK ↔ SOL swaps.',
        logo: 'images/kelswap_logo.webp',
        ready: false
    },
    {
        name: 'HavenChat',
        description: 'Secure messaging platform.',
        logo: 'images/havenchat_logo.webp',
        ready: false
    },
    {
        name: 'HavenPlay',
        description: 'A Social Video/Audio Platform.',
        logo: 'images/havenplay_logo.webp',
        ready: false
    },
    {
        name: 'HavenBook',
        description: 'A Hotel/Flight booking platform.',
        logo: 'images/havenbook_logo.webp',
        ready: false
    },
    {
        name: 'HavenConverter',
        description: 'A multimedia file converter.',
        logo: 'images/havenConverter_logo.webp',
            ready: false
    },
    {
        name: 'Promkel (PMK) token',
        description: 'Our official utility token.',
        logo: 'images/pmk_logo.webp',
        ready: false
    }
];

const roadmapData = [
    { quarter: 'Q3 2026', desc: 'PMK Token Launch + Internal Testing + KelSwap', ready: false },
    { quarter: 'Q4 2026', desc: 'Beta launch of HavenSocial', ready: false },
    { quarter: '2027', desc: 'Beta launch of HavenChat', ready: false },
    { quarter: '2027', desc: 'Public Mainnet + DEX/CEX listings', ready: false },
    {quarter: '2028', desc: 'Beta launch of HavenPlay', ready: false },
    {quarter: '2028', desc: 'Beta launch of HavenBook', ready: false },
    { quarter: 'Q4 2026', desc: 'Beta launch of HavenConverter', ready: false },
    { quarter: 'Coming Soon!', desc: 'Other Products will be updated later', ready: false }
];

// the render function for the products section that will be displayed
// in the products modal when the user clicks on the products button

function renderProducts() {

    let html = `

        <h2>Our Products</h2>

        <div class="modal-products-grid">

    `;

    productsData.forEach(product => {

        const statusHTML = product.ready

            ? `<span class="status ready">✅ Ready / Launched</span>`

            : `<span class="status coming">Coming Soon</span>`;


        html += `

            <div class="product-card-modal ${product.ready ? 'ready' : ''}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <img src="${product.logo}" alt="${product.name} logo" width="100" height="100">

                ${statusHTML}

            </div>

        `;

    });

    html += `</div>`;

    return html;
}

// the render function for the roadmap section that will be displayed
// in the roadmap modal when the user clicks on the roadmap button

function renderRoadmap() {

    let html = `

        <h2>Roadmap</h2>

        <ul class="roadmap-list">

    `;

    roadmapData.forEach(item => {

        const statusHTML = item.ready

            ? `<span class="status ready">✅ Done</span>`

            : `<span class="status coming">In Progress</span>`;


        html += `

            <li>

                <strong>${item.quarter}</strong> — ${item.desc}

                ${statusHTML}

            </li>

        `;

    });

    html += `</ul>`;

    return html;

}

// adding the modal contents together in an object that can be easily
// accessed when the user clicks on the corresponding button

const contents = {

    about: `

        <h2>About ByteHaven</h2>

        <p>ByteHaven Tech Solutions Ltd is a Nigerian technology company building a full digital ecosystem — social platforms, messaging, and more — all powered by our official utility token, <strong>Promkel (PMK)</strong>.</p>
           
        <p>Our goal is to create real utility, sustainable revenue, and long-term value for Africa.</p>

    `,

    founder: `

        <h2>Our Founder</h2>

        <p><strong>DavidCaleb Uchechukwu Osigwe</strong></p>

        <p>Founder & CEO</p>

        <p>Passionate about technology and solving real problems, DavidCaleb is building ByteHaven as a complete ecosystem that empowers users and creates lasting value across Africa.</p>

        <img src="images/founder.webp" alt="DavidCaleb Uchechukwu Osigwe" width="200" height="200">

    `,

    products: renderProducts(),

    roadmap: renderRoadmap(),

    contact: `

        <h2>Get In Touch</h2>

        <p>We'd love to hear from you!</p>

        <p><strong>Email:</strong> <a href="mailto:d08178084956@gmail.com">d08178084956@gmail.com</a></p>

        <p><strong>WhatsApp:</strong> <a href="https://wa.me/+2349035677967" target="_blank">+234 903 567 7967</a></p>

        <p>Feel free to reach out with any questions or ideas.</p>

    `
};
    
// ====================== MODAL INITIALIZER ======================
export function initModals() {

    const modal = document.querySelector('#info-modal'); 
           // ← your dialog
    const modalBody = document.querySelector('#modal-body');

    const closeBtn = document.querySelector('#close-modal');

    if (!modal || !modalBody || !closeBtn) {

        console.error('Modal elements not found. Make sure you have <dialog id="info-modal"> in HTML');

        return;

    }

    function openModal(type) {

        if (contents[type]) {

            modalBody.innerHTML = contents[type];

            modal.showModal();

        }

    }

    // Button listeners (your filterButtons + footer buttons)

    const buttons = {

        about: document.getElementById('about'),

        founder: document.getElementById('founder'),

        products: document.getElementById('products'),

        roadmap: document.getElementById('roadmap'),

        contact: document.getElementById('contact')

    };

    Object.keys(buttons).forEach(key => {

        if (buttons[key]) {

            buttons[key].addEventListener('click', () => openModal(key));

        }

    });

    // Hero "Explore Our Products" button

    const exploreBtn = document.getElementById('explore-btn');

    if (exploreBtn) {

        exploreBtn.addEventListener('click', () => openModal('products'));

    }

    // Close modal

    closeBtn.addEventListener('click', () => modal.close());

    modal.addEventListener('click', (e) => {

        if (e.target === modal) modal.close();

    });

    console.log('✅ Modals initialized with dynamic products + roadmap');
    
}
