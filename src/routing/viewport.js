import { LitElement, html } from 'lit-element';

export class Viewport extends LitElement {

    constructor(){
        super();
        this.viewNow = '/home';
    }

    connectedCallback() {
        super.connectedCallback();
        this.viewList = this.querySelectorAll('wc-route');
        this.renderView(this.viewNow);
    }

    renderView(path) {
        this.innerHTML = '';
        this.shadowRoot.innerHTML = '';

        const view = Array.from(this.viewList).find((node) => {
            return node.getAttribute('path') === path;
        });

        !!view && this.shadowRoot.appendChild(view);

        this.viewNow = path;
    }
}
customElements.define('wc-viewport', Viewport);