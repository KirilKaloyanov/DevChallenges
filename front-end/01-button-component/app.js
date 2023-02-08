class Button extends HTMLButtonElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const btn = document.createElement('button');
        btn.textContent = this.getAttribute('text');
        this.shadowRoot.appendChild(btn);
    }
}

customElements.define('but-ton', Button, {extends: 'button'});