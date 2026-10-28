import styles from './modal.scss'
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
      <style>${styles}</style>
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