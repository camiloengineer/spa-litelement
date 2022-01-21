import { html, LitElement } from 'lit-element';

export class Registry extends LitElement {

    static get properties(){
        return {
            name: {type: String},
            surNames: {type: String},
            age: {type: String},
        }
    }

    constructor(){
        super();
        this.name = this.surNames = this.age = '';
    }

    management(name){
        return (event) => {
            const value = event.target.value; 
            this[name] = value;
        }
    }

    save(){
        const detail = { name: this.name, surNames: this.surNames, age: this.age };
        const options = {
            detail: detail,
            bubble: true,
            composed: true
        }
        this.dispatchEvent( new CustomEvent('savePerson', options));
    }

    render() { 
        return html `
            <form>
                <label>Nombre <input @input="${this.management('name')}" .value="${ this.name }" /> </label>
                <label>Apellidos <input @input="${this.management('surNames')}" .value="${ this.surNames }" /> </label>
                <label>Edad <input @input="${this.management('age')}" .value="${ this.age}"/> </label>
                <button @click="${ this.save }" type="button">
                    Guardar
                </button>
            </form>
        `
    }
}
customElements.define('wc-registry', Registry);