import { css, LitElement, html } from "lit-element";

class Button extends LitElement {

    static get properties(){
        return {
            text: { Type: String, attribute: true}
        }
    }

    constructor(){
        super();
    }
    
    connectedCallback() {
        super.connectedCallback()
        console.log(this.text)
        console.log('connected')
      }

    static get styles() {
        return css`
            button {
                all:initial;
                background-color: #9292b5;
                font-family: cursive;
                margin-right: 20px;
                width: 150px;
                border-radius: 10px;
                text-align: center;
                padding: 10px;
                text-align: center;
                padding: 2px;
                cursor: pointer;
            }
        ` 
    }

    firstUpdated(){
        this.button = this.shadowRoot.querySelector('button')
    }

    mouseDownListener(event){
        this.button.style.backgroundColor = '#585866'
    }
    mouseUpListener(event){
        this.button.style.backgroundColor = '#9292b5'
    }

    render() {
        return html`
            <button @mousedown="${this.mouseDownListener}" @mouseup="${this.mouseUpListener}">${ this.text }</button>
        `
    }
}

customElements.define('wc-button', Button)