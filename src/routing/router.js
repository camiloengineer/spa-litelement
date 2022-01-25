import { LitElement, html } from 'lit-element';

export class Router extends LitElement {

    static get properties() {
        return {
            name: { type: String, attribute: true}
        }
    }

    constructor(){
        super();
        this._listernerGoEvent = this._listernerGoEvent.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        this.viewportList = this.querySelectorAll('wc-viewport');
        this.addEventListener('goEvent', this._listernerGoEvent);
    }

    _listernerGoEvent(event){
        const { to, routerName } = event.detail;
        if(routerName === undefined || routerName === this.name){
            this.viewportList.forEach(( viewport ) => {
                viewport.renderView(to);
            })
            event.stopPropagation();
        }
    }

    render() {
        return html `
            <slot></slot>
        `
    }
}
customElements.define('wc-router', Router);