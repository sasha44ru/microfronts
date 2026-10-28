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
      <style>
        :host { display: block; }
        .card {
          background: var(--ui-color-bg);
          color: var(--ui-color-text);
          border: 1px solid var(--ui-color-border);
          border-radius: var(--ui-radius);
          padding: var(--ui-space-4);
          font-family: var(--ui-font);
        }
        .card__title {
          margin: 0 0 var(--ui-space-3);
          font-size: 16px;
          font-weight: 600;
        }
      </style>
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