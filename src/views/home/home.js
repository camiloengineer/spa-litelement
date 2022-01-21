import { html, LitElement } from 'lit-element';
import './custom-table';
import './registry'

export class Home extends LitElement {

    static get properties(){
        return {
            list: { type: Array }
        }
    }

    constructor(){
        super();
        this.list = [
            { name: 'María', surNames: 'García Perez', age: 30 },
            { name: 'Pedro', surNames: 'Ríos Rodriguez', age: 25 },
            { name: 'Julia', surNames: 'Durán Vicente', age: 48 },
        ];
    }

    addList(event){
        //Crea un nuevo array de todos los valores que teníamos
        const newList = Object.assign([], this.list);
        newList.push(event.detail);
        this.list = newList;
    }

    render(){
        return html`
            <wc-registry @savePerson="${ this.addList }" ></wc-registry>
            <wc-custom-table .list="${ this.list }"></wc-custom-table>
        `
    }
}
customElements.define('wc-home', Home);