// adding the script that will populate the modals on the page

export function initModals() {
    
    const modal = document.qs(`.modal`);

    const modalBody = document.qs(`#modal-body`);

    const closeModal = document.qs(`#close-modal`);

    if (!modal || !modalBody || !closeBtn) {

        console.warn('Modal elements not found');

        return;
    }

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

        `,

        products: `

            <h2>Our Products</h2>

            <div class="modal-products-grid">

                <div class="product-card-modal">

                    <h3>HavenSocial</h3>

                    <p>Next-generation social platform powered by PMK.</p>

                    <img src="images/havensocial_logo.webp" alt="HavenSocial logo" width="100" height="100">

                </div>

                <div class="product-card-modal">

                    <h3>KelSwap</h3>

                    <p>Internal DEX for seamless PMK ↔ SOL swaps.</p>

                    <img src="images/kelswap_logo.webp" alt="KelSwap logo" width="100" height="100">

                </div>

                <div class="product-card-modal">

                    <h3>HavenChat</h3>

                    <p>Secure messaging platform.</p>

                    <img src="images/havenchat_logo.webp" alt="HavenChat logo" width="100" height="100">

                </div>

                <div class="product-card-modal">

                    <h3>HavenPlay</h3>

                    <p>A Social Video/Audio Platform.</p>

                    <img src="images/havenplay_logo.webp" alt="HavenPlay logo" width="100" height="100">

                </div>

                <div class="product-card-modal">

                    <h3>HavenBook</h3>

                    <p>A Hotel/Flight booking platform.</p>

                    <img src="images/havenbook_logo.webp" alt="HavenBook logo" width="100" height="100">

                </div>

            </div>

        `,

        roadmap: `

            <h2>Roadmap</h2>

            <ul class="roadmap-list">

                <li><strong>Q3 2026</strong> — PMK Token Launch + Internal Testing + KelSwap</li>

                <li><strong>Q4 2026</strong> — Beta launch of HavenSocial</li>

                <li><strong>Q4 2026</strong> — Beta launch of HavenChat</li>

                <li><strong>Q4 2027</strong> — Public Mainnet + DEX/CEX listings</li>

                <li><strong>Coming Soon!</strong> — Other Products will be updated later</li>

            </ul>

        `,

        contact: `

            <h2>Get In Touch</h2>

            <p>We'd love to hear from you!</p>

            <p><strong>Email:</strong> <a href="mailto:d08178084956@gmail.com">d08178084956@gmail.com</a></p>

            <p><strong>WhatsApp:</strong> <a href="https://wa.me/+2349035677967" target="_blank">+234 903 567 7967</a></p>

            <p>Feel free to reach out with any questions or ideas.</p>

        `
    };

    function openModal(type) {

        if (contents[type]) {

            modalBody.innerHTML = contents[type];

            modal.showModal();

        }

    }

    // Navigation links

    document.querySelectorAll('a[data-modal]').forEach(link => {

        link.addEventListener('click', (e) => {

            e.preventDefault();

            const type = link.getAttribute('data-modal');

            openModal(type);

        });

    });

    // Hero button

    const exploreBtn = document.getElementById('explore-btn');

    if (exploreBtn) {

        exploreBtn.addEventListener('click', () => openModal('products'));

    }

    // Close modal
    closeModal.addEventListener('click', () => modal.close());

    modal.addEventListener('click', (e) => {

        if (e.target === modal) modal.close();
    });

    console.log('✅ Modals initialized successfully');
}
