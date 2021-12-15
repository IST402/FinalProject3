/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class StatInfo extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'black';

    // map function
    this.ctitle = {
      stat1: "Agile",
      stat2: "Strength",
      stat3: "Speed",
      stat4: "Endurance"
    };
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
      endurancestat: {type: String, reflect: true},
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

        .statcontainer1{
          padding: 10px;
          display: grid;
          grid-template-columns: 50px 1fr;
          /* width: 100%; */
        }

        .statcontainer2{
          padding: 10px;
          border-style: solid;
          border-color: #212529;
          /* up right down left */
          border-width: 8px 0px 8px 0px;
          display: grid;
          grid-template-columns: 50px 1fr;
        }

        .statcontainer3{
          padding: 7px;
          border-style: solid;
          border-color: #212529;
          border-width: 8px 0px 0px 0px;
          display: grid;
          grid-template-columns: 50px 1fr;
        }
      `,
    ];
  }

  render() {
    return html`



    <div class="container">
      <div class="statcontainer1">
       <div class="word">${this.ctitle.stat1}</div>
       <div class="num"><slot name="agilestat">${this.agilestat}</slot></div>
      </div>  


      <div class="statcontainer2">
       <p class="word">${this.ctitle.stat2}</p>
       <p class="num"><slot name="strengthstat">${this.strengthstat}</slot></p>
      </div>

      <div class="statcontainer1">
       <p class="word">${this.ctitle.stat3}</p>
       <p class="num"><slot name="speedstat">${this.speedstat}</slot></p> 
      </div>  
      
      
      <div class="statcontainer3">
       <p class="word">${this.ctitle.stat4}</p>
       <p class="num"><slot name="endurancestat">${this.endurancestat}</slot></p> 
      </div>  
      
  </div> 
    `;
  }
}
customElements.define(StatInfo.tag, StatInfo);