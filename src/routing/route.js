import { html, LitElement } from 'lit-element';

export class Route extends LitElement {
    render() { 
        return html `
            <slot></slot>
        `
    }
}
customElements.define('wc-route', Route);