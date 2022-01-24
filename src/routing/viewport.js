import { LitElement, html } from 'lit-element';

export class Viewport extends LitElement {

    constructor(){
        super();
        this.viewNow = '/default';
    }

    connectedCallback() {
        this.viewNow = this.querySelectorAll('wc-route');
        this.renderView(this.viewNow);
    }

    renderView(path) {
        this.innerHTML = '';
        this.shadowRoot.innerHTML = '';

        const view = Array.from(this.viewList).find(() => {
            return node.getAttribute('path') === path;
        });

        !!view && this.shadowRoot.appendChild(view);

        this.viewNow = path;
    }
}
customElements.define('wc-viewport', Viewport);