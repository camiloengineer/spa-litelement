import { html, LitElement } from 'lit-element';

export class Link extends LitElement {

    static get properties(){
        return {
            to: { type: String, attribute: true },
            routerName: { type: String, attribute: true }
        }
    }

    _handlerClick(){
        const detail = {
            to: this.to,
            routerName: this.routerName
        }

        this.dispatchEvent(new CustomEvent('goEvent', { detail, bubbles: true, composed: true }));
    }

    render() {
        return html`
            <div @click="${ this._handlerClick }" >
                <slot></slot>
            </div>
        `;
    }
}
customElements.define('wc-link', Link);