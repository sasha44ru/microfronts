import styles from './card.scss'
class UiCard extends HTMLElement {
    static get observedAttributes() {
        return ['heading'];
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
        const heading = this.getAttribute('heading') || '';

        this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <section class="card">
        ${heading ? `<h2 class="card__title">${heading}</h2>` : ''}
        <slot></slot>
      </section>
    `;
    }
}

if (!customElements.get('ui-card')) {
    customElements.define('ui-card', UiCard);
}