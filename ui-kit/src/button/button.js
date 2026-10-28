import styles from './button.scss'
class UiButton extends HTMLElement {
    static get observedAttributes() {
        return ['variant', 'disabled'];
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
        const variant = this.getAttribute('variant') || 'primary';
        const disabled = this.hasAttribute('disabled');

        this.shadowRoot.innerHTML = `
        <style>${styles}</style>
      <button class="${variant}" ${disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;
    }
}

if (!customElements.get('ui-button')) {
    customElements.define('ui-button', UiButton);
}