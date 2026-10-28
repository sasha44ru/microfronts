import styles from './badge.scss'
class UiBadge extends HTMLElement {
    static get observedAttributes() {
        return ['tone'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        if (this.shadowRoot) this.render();
    }

    render() {
        const tone = this.getAttribute('tone') || 'neutral';

        this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <span class="badge ${tone}"><slot></slot></span>
    `;
    }
}

if (!customElements.get('ui-badge')) {
    customElements.define('ui-badge', UiBadge);
}