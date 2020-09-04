import { LitElement, html, css } from 'lit-element';
import '@polymer/paper-card/paper-card.js'

const nombre = 'Paper-card';
class MostrarOcultar extends LitElement 
{ 
  static get styles() {
  return css `
    :host{
      display: block;
      
    }
    button {
        width: 15%;
        min-width: 15%;
        word-break: break-all;
        background: lightseagreen;
        color: white;
        font-family: inherit;
        border: none;
    }
    `}
constructor(){
  super();
}
  render(){

  return html `
    <paper-card>
    
      <paper-card .heading="${nombre}">
      
      <br><button @click=${this._mostrar}>X</button>
      <button @click=${this._ocultar}>_</button>
      </paper-card>
    
      <div id="mostrarOcultar"><br>Mostrar y ocultar contenido </div>
    </paper-card>
   
    `;
  }
  _mostrar(){
    this.shadowRoot.getElementById('mostrarOcultar').style.display="block";
  }

  _ocultar(){
    this.shadowRoot.getElementById('mostrarOcultar').style.display="none";
  }


}

customElements.define('mostrar-ocultar',MostrarOcultar);