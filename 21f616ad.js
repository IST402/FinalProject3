import{r as t,p as e}from"./42b189ab.js";import{S as r}from"./587857da.js";class i extends r{constructor(){super(),this.accentColor="grey",this.image=new URL(this.image,import.meta.url).href,this.alt=""}static get tag(){return"tc-photo"}static get properties(){return{...super.properties,image:{type:String,reflect:!0},alt:{type:String,reflect:!0}}}static get styles(){return[...super.styles,t`:host{--img-width:310px;justify-content:center;align-items:center;display:flex;flex-direction:column;border-style:solid;border-color:#212529;border-width:8px 0 8px 0}img{display:block;max-width:100%;max-height:100%}`]}render(){return e` <div> <img src="${this.image}" alt="${this.alt}"> </div> `}}customElements.define(i.tag,i);export{i as Photo};
