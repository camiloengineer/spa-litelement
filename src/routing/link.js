import { html, LitElement } from 'lit-element';

export class Link extends LitElement {

    static get properties(){
        return {
            to: { type: String, attribute: true },
            routerName: { type: String, attribute: true }
        }
    }

    _handlerClick(){
        const detailt = {
            to: this.to,
            routerName: this.routerName
        }

        this.dispatchEvent(new CustomEvent('goNav', detailt));
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