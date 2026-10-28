class UiModal extends HTMLElement {
    static get observedAttributes() {
        return ['open', 'title'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._onKeydown = this._onKeydown.bind(this);
    }

    connectedCallback() {
        this.render();
        document.addEventListener('keydown', this._onKeydown);
    }

    disconnectedCallback() {
        document.removeEventListener('keydown', this._onKeydown);
    }

    attributeChangedCallback() {
        if (this.shadowRoot) this.render();
    }

    show() {
        this.setAttribute('open', '');
    }

    close() {
        if (!this.hasAttribute('open')) return;
        this.removeAttribute('open');
        this.dispatchEvent(
            new CustomEvent('ui-close', { bubbles: true, composed: true })
        );
    }

    _onKeydown(e) {
        if (e.key === 'Escape' && this.hasAttribute('open')) this.close();
    }

    render() {
        const title = this.getAttribute('title') || '';

        this.shadowRoot.innerHTML = `
      <style>
        :host { display: none; }
        :host([open]) { display: block; }
        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          display: grid;
          place-items: center;
          padding: var(--ui-space-4);
          z-index: 1000;
        }
        .dialog {
          width: min(480px, 100%);
          background: var(--ui-color-bg);
          color: var(--ui-color-text);
          font-family: var(--ui-font);
          border-radius: var(--ui-radius);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
        }
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--ui-space-4);
          border-bottom: 1px solid var(--ui-color-border);
        }
        h2 { margin: 0; font-size: 16px; }
        .close {
          border: none;
          background: transparent;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          color: var(--ui-color-muted);
        }
        .body { padding: var(--ui-space-4); }
        footer {
          display: flex;
          justify-content: flex-end;
          gap: var(--ui-space-2);
          padding: var(--ui-space-4);
          border-top: 1px solid var(--ui-color-border);
        }
      </style>
      <div class="backdrop">
        <div class="dialog" role="dialog" aria-modal="true">
          <header>
            <h2></h2>
            <button class="close" type="button" aria-label="Закрыть">x</button>
          </header>
          <div class="body"><slot></slot></div>
          <footer><slot name="footer"></slot></footer>
        </div>
      </div>
    `;

        this.shadowRoot.querySelector('h2').textContent = title;
        this.shadowRoot.querySelector('.close').addEventListener('click', () => this.close());
        this.shadowRoot.querySelector('.backdrop').addEventListener('click', (e) => {
            if (e.target === this.shadowRoot.querySelector('.backdrop')) this.close();
        });
    }
}

if (!customElements.get('ui-modal')) {
    customElements.define('ui-modal', UiModal);
}