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
      <style>
        :host { display: inline-block; }
        button {
          font-family: var(--ui-font);
          font-size: 14px;
          padding: var(--ui-space-2) var(--ui-space-4);
          border-radius: var(--ui-radius);
          border: 1px solid transparent;
          cursor: pointer;
          color: #fff;
          background: var(--ui-color-primary);
        }
        button:hover { background: var(--ui-color-primary-hover); }
        button.ghost {
          background: transparent;
          color: var(--ui-color-primary);
          border-color: var(--ui-color-primary);
        }
        button.danger { background: var(--ui-color-danger); }
        button:disabled { opacity: .5; cursor: not-allowed; }
      </style>
      <button class="${variant}" ${disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;
    }
}

if (!customElements.get('ui-button')) {
    customElements.define('ui-button', UiButton);
}