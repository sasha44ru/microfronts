import styles from './input.scss'
class UiInput extends HTMLElement {
    static get observedAttributes() {
        return ['label', 'placeholder', 'type', 'value', 'error'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._onInput = this._onInput.bind(this);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        if (this.shadowRoot) this.render();
    }

    get value() {
        return this.shadowRoot.querySelector('input')?.value ?? '';
    }

    set value(v) {
        const input = this.shadowRoot.querySelector('input');
        if (input) input.value = v;
    }

    _onInput(e) {
        this.dispatchEvent(
            new CustomEvent('ui-input', {
                detail: { value: e.target.value },
                bubbles: true,
                composed: true,
            })
        );
    }

    render() {
        const label = this.getAttribute('label') || '';
        const placeholder = this.getAttribute('placeholder') || '';
        const type = this.getAttribute('type') || 'text';
        const value = this.getAttribute('value') || '';
        const error = this.getAttribute('error') || '';

        this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <label>
        ${label ? `<span>${label}</span>` : ''}
        <input type="${type}" placeholder="${placeholder}" value="${value}" class="${error ? 'invalid' : ''}" />
        ${error ? `<span class="error">${error}</span>` : ''}
      </label>
    `;

        this.shadowRoot.querySelector('input').addEventListener('input', this._onInput);
    }
}

if (!customElements.get('ui-input')) {
    customElements.define('ui-input', UiInput);
}