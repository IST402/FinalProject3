/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class Header extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'black';
    this.name='';
  }

  static get tag() {
    return 'tc-header';
  }

  static get properties() {
    return {
      ...super.properties,
      name: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: 'Bebas Neue', sans-serif;
          padding: 7px;
        }
        div {
          border: 3px black;
          display: flex;
          flex-direction: column;
          
        }
        .headerp {
          
          text-transform: uppercase;
          text-align: left;
          font-weight: bolder;
          color: var(--simple-colors-default-theme-accent-8);
          margin: 9px;
          font-size: 14px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
            <slot name="header">
              <p class="headerp">${this.name}</p>
            </slot>
      </div>
    `;
  }
}
customElements.define(Header.tag, Header);