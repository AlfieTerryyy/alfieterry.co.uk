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
    }
}

// Define the new element
customElements.define('custom-header', CustomHeader);
