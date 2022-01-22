import { LitElement } from 'lit-element';

export class Pagina3 extends LitElement {
    render() {
        html`
            <div>
                <h2>Hola desde Página 3</h2>
            </div>
        `;
    }
}
customElements.define('wc-pagina3', Pagina3);