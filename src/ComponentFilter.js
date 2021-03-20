import { html, css, LitElement } from 'lit-element';
//Se trabaja con secciones

export class ComponentFilter extends LitElement {

  //Estilos que usa el component, retorna la hoja de estilos
  //.css de Angular
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--component-filter-text-color, #000);
      }
      button{
        background-color: yellow;
        color: black;
      }
    `;
  }

  /*Region de propiedades se indica los parametros de entrada, para uqe puedan
  ser personalizadas*/
  //TS de Angular (@Input)
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  /*Inicializacion de variables */
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 0;
  }

  //Método
  __increment() {
    this.counter += 1;
  }

  //Renderiza el html,
  //.html de Angular
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
