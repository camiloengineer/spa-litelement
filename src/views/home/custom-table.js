import { html, LitElement } from 'lit-element';

export class CustomTable extends LitElement {

    static get properties(){
        return {
            list: { type: Array}
        }
    }

    render() {
        return html`
            <h1>Tabla de registros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        this.list.map((element) => {
                            return html`
                                <tr>
                                    <td>${element.name}</td>
                                    <td>${element.surNames}</td>
                                    <td>${element.age}</td>
                                </tr>
                            ` 
                        })
                     }
                </tbody>
            </table>
        ` 
    }
}
customElements.define('wc-custom-table', CustomTable);