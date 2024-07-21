// header.js

class CustomHeader extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the header template without inline styles
        const template = document.createElement('template');
        template.innerHTML = `
            <header>
                <div class="logo">
                    <img src="https://alfieterry.co.uk/Logo3.png" alt="Site Logo">
                    <h1>The Terrance Territory</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index">Home</a></li>
                        <li><a href="bio">Biography</a></li>
                        <li><a href="certs">Certificates</a></li>
                        <li><a href="skills">Skills</a></li>
                        <li><a href="hobbies">Hobbies</a></li>
                        <li><a href="code">Free Code</a></li>
                        <li><a href="https://github.com/AlfieTerryyy/">GitHub</a></li>
                        <li><a href="https://www.youtube.com/channel/UCzEVXaJ9v7wnr_NhappA2rQ?app=desktop">YouTube</a></li>
                        <li><a href="contact">Contact</a></li>
                        <li><a href="license">License</a></li>
                    </ul>
                </nav>
                <button id="theme-toggle">☀︎  ☾</button>
            </header>
        `;

        // Attach the template content to the shadow DOM
        shadow.appendChild(template.content.cloneNode(true));

        // Add <link> and <script> tags to the document head
        this.addExternalResources();
    }

    addExternalResources() {
        // List of resources to add
        const resources = [
            { type: 'link', href: 'https://fonts.googleapis.com', rel: 'preconnect' },
            { type: 'link', href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' },
            { type: 'link', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap', rel: 'stylesheet' },
            { type: 'link', href: 'Logo3.ico', rel: 'icon', type: 'image/x-icon' },
            { type: 'link', href: 'style.css', rel: 'stylesheet' },
            { type: 'script', src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
            { type: 'script', src: 'main.js', defer: true },
            { type: 'script', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3897151508086803', async: true, crossorigin: 'anonymous' },
            { type: 'script', src: 'https://www.googletagmanager.com/gtag/js?id=G-09BN8QLW21', async: true }
        ];

        // Add resources to the document head
        resources.forEach(resource => {
            const element = document.createElement(resource.type);
            Object.keys(resource).forEach(key => {
                if (key !== 'type') {
                    element.setAttribute(key, resource[key]);
                }
            });
            document.head.appendChild(element);
        });

        // Add Google Analytics script inline
        const gtagScript = document.createElement('script');
        gtagScript.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-09BN8QLW21');
        `;
        document.head.appendChild(gtagScript);
    }
}

// Define the new element
customElements.define('custom-header', CustomHeader);
