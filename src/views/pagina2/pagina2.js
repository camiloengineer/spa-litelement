import { html, LitElement } from 'lit-element';

export class Pagina2 extends LitElement {
    render() {
        return html`
            <div>
                <h2>Hola desde Página 2</h2>
            </div>
        `;
    }
}
customElements.define('wc-pagina2', Pagina2);