import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class Photo extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'grey';
    this.image = new URL(this.image, import.meta.url).href;
    this.alt = '';
  }

  static get tag() {
    return 'tc-photo';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, reflect: true },
      alt: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --img-width: 310px;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          border-style: solid;
          border-color: #212529;
          border-width: 8px 0px 8px  0px;
        }

        img {
          display: block;
          max-width: 100%;
          max-height: 100%;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <img src="${this.image}" alt="${this.alt}"/>
      </div>
    `;
  }
}
customElements.define(Photo.tag, Photo);