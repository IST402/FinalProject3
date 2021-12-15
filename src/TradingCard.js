// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class TradingCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'trading-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.photoSrc = "'../assets/WinkingRedPanda.jpg'";

    setTimeout(() => {
      // import('./Header.js');
      import('./Photo.js');
      import('./StatInfo.js');
    }, 0);
  
  }

  

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
      name: { type: String, reflect: true },
      photoSrc: { type: String, reflect: true },
      ctitle: {type:Object},
      agilestat: { type: String, reflect: true },
      strengthstat: { type: String, reflect: true },
      speedstat: {type: String, reflect: true},
      endurancestat: {type: String, reflect: true},
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #F4BA2B;
        width: 300px;
        border-radius: 10px;
        margin: 100px;
        box-shadow: 0 0 0 .6em #020202,
              0 0 0 2.1em white;
        /* margin: 4em;
        padding:1em; */
      }


      .header{
        border: 3px #212529;
          display: flex;
          flex-direction: column;
          /* padding: 2px; */
          font-family: 'Bebas Neue', sans-serif;
          text-transform: uppercase;
          font-weight: bolder;
          color: var(--simple-colors-default-theme-accent-8);
          margin: 9px;
          font-size: 20px;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
    <!-- <div class="header">
      <tc-header></tc-header>
    </div> -->

    <div class="header">
      <slot name="header">
        <p> ${this.name}</p>
      </slot>
    </div>
      
    <div class="image">
        <tc-photo image="${this.photoSrc}"></tc-photo>
    </div>

    <div>
      <tc-statinfo>
        
      <slot slot="agilestat"name="agilestat">${this.agilestat}</slot>
      <slot slot="strengthstat"name="strengthstat">${this.strengthstat}</slot>
      <slot slot="speedstat"name="speedstat">${this.speedstat}</slot>
      <slot slot="endurancestat"name="endurancestat">${this.endurancestat}</slot>

      </tc-statinfo>
    </div>


    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/trading-card.haxProperties.json`, import.meta.url).href; 

    

    

    

    

  }
}
