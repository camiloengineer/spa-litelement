import { css, html, LitElement } from 'lit-element';

export class Navbar extends LitElement {

    static get styles() {
        return css`
            .container-navbar {
                display: flex;
                justify-content: center;
                margin: auto;
                background-color: #83b983;
                padding: 1pc;
            }
        ` 
    }

    render() {
        return html`
            <div class="container-navbar">
                <wc-link to="/home">
                    <wc-button text="Home" ></wc-button>
                </wc-link>
                <wc-link to="/pagina2"> 
                    <wc-button text="Página 2" ></wc-button>
                </wc-link>
                <wc-link to="/pagina3">
                    <wc-button text="Página 3" ></wc-button>
                </wc-link>
            </div>
        `;
    }
}
customElements.define('wc-navbar', Navbar);