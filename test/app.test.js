import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../trading-card.js';

describe('TradingCard', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(
      html`<trading-card 
      name="Raccoon"
      photoSrc="../assets/Rac.jpg"
      agilestat="65"
      strengthstat="45"
      speedstat="52"
      endurancestat="33"
      ></trading-card>
      `);
  });

  it('renders a p', () => {
    const p = element.shadowRoot.querySelector('p');
    console.log('Element is: <p>')
    expect(p).to.exist;
  });


  it('renders a tc-photo', () => {
    const tcp = element.shadowRoot.querySelector('tc-photo');
    expect(tcp).to.exist;
  });

  it('renders a correct stat 1 number', () => {
    const s1 = element.shadowRoot.querySelector('slot[name="agilestat"]');
    expect(s1).to.exist;
    expect(s1.textContent).to.equal('43');
  });

  it('renders a correct stat 2 number', () => {
    const s2 = element.shadowRoot.querySelector('slot[name="strengthstat"]');
    expect(s2).to.exist;
    expect(s2.textContent).to.equal('32');
  });

  it('renders a correct stat 3 number', () => {
    const s3 = element.shadowRoot.querySelector('slot[name="speedstat"]');
    expect(s3).to.exist;
    expect(s3.textContent).to.equal('28');
  });

  it('renders a correct stat 4 number', () => {
    const s4 = element.shadowRoot.querySelector('slot[name="endurancestat"]');
    expect(s4).to.exist;
    expect(s4.textContent).to.equal('22');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

});
