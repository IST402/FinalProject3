/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class StatInfo extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'black';
    this.agilestat='3';

    // map function
    this.ctitle = {
      stat1: "Agile",
      stat2: "Strength",
      stat3: "Speed",
    };

    // this.cardData = [
    //   {
    //     name: 'Red Panda',
    //     // image: '../assets/WinkingRedPanda.jpg',
    //     agile: '43',
    //     strength: '32',
    //     speed: '28',
    //   },
    //   {
    //     name: 'Raccoon',
    //     // image: '../assets/Rac.jpg',
    //     agile: '65',
    //     stength: '45',
    //     speed: '52',
    //   }
    // ];
  }

  static get tag() {
    return 'tc-statinfo';
  }

  static get properties() {
    return {
      ...super.properties,
      ctitle: {type:Object},
      agilestat: { type: String, reflect: true },
      strengthstat: { type: String, reflect: true },
      speedstat: {type: String, reflect: true},
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: "Lucida Console", "Courier New", monospace;
        }

        div {
          /* delete border when done */
          /* border: 2px dashed blue; */
          display: flex;
          flex-direction: column;
          /* width: 100%; */
        }

        .container {
          justify-content: center;
        }

        .word {
          text-align: left;
          margin: 0px;
          font-size: 19px;
        }

        .num{
          text-align: right;
          margin: 0px;
          font-size: 19px;
        }
        

        .statcontainer{
          padding: 7px;
        
        }

        .statcontainer2{
          padding: 7px;
          border-style: solid;
          border-color: #212529;
          /* up right down left */
          border-width: 8px 0px 8px 0px;
        }
      `,
    ];
  }

  render() {
    return html`



    <div class="container">
    

    <div class="statcontainer">
       <div class="word"> ${this.ctitle.stat1}</div>
       <div class="num"><slot name="agilestat">${this.agilestat}</slot></div>
      </div>  


      <div class="statcontainer2">
       <p class="word"> ${this.ctitle.stat2}</p>
       <p class="num"><slot name="strengthstat">${this.strengthstat}</slot> </p>
      </div>

      <div class="statcontainer">
       <p class="word"> ${this.ctitle.stat3}</p>
       <p class="num"><slot name="speedstat">${this.speedstat}</slot></p> 
      </div>  
      
  </div> 
    `;
  }
}
customElements.define(StatInfo.tag, StatInfo);