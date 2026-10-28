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
      <style>
        :host { display: inline-block; }
        .badge {
          display: inline-block;
          font-family: var(--ui-font);
          font-size: 12px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 999px;
          background: #eef2ff;
          color: #3730a3;
        }
        .success { background: #e7f6ec; color: #067647; }
        .warning { background: #fef3e2; color: #b54708; }
        .danger  { background: #fee4e2; color: #b42318; }
      </style>
      <span class="badge ${tone}"><slot></slot></span>
    `;
    }
}

if (!customElements.get('ui-badge')) {
    customElements.define('ui-badge', UiBadge);
}