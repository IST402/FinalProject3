import{r as t,p as s}from"./bbec41b7.js";import{S as e}from"./4788dc40.js";class i extends e{constructor(){super(),this.accentColor="black",this.agilestat="3",this.ctitle={stat1:"Agile",stat2:"Strength",stat3:"Speed"}}static get tag(){return"tc-statinfo"}static get properties(){return{...super.properties,ctitle:{type:Object},agilestat:{type:String,reflect:!0},strengthstat:{type:String,reflect:!0},speedstat:{type:String,reflect:!0}}}static get styles(){return[...super.styles,t`:host{font-family:"Lucida Console","Courier New",monospace}div{display:flex;flex-direction:column}.container{justify-content:center}.word{text-align:left;margin:0;font-size:19px}.num{text-align:right;margin:0;font-size:19px}.statcontainer{padding:7px}.statcontainer2{padding:7px;border-style:solid;border-color:#212529;border-width:8px 0 8px 0}`]}render(){return s` <div class="container"> <div class="statcontainer"> <div class="word"> ${this.ctitle.stat1}</div> <div class="num"><slot name="agilestat">${this.agilestat}</slot></div> </div> <div class="statcontainer2"> <p class="word"> ${this.ctitle.stat2}</p> <p class="num"><slot name="strengthstat">${this.strengthstat}</slot> </p> </div> <div class="statcontainer"> <p class="word"> ${this.ctitle.stat3}</p> <p class="num"><slot name="speedstat">${this.speedstat}</slot></p> </div> </div> `}}customElements.define(i.tag,i);export{i as StatInfo};
