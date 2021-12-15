import { html } from 'lit';

import '../trading-card.js';

export default {
  title: 'trading card',
  component: 'trading-card',
  argTypes: {
    name: { control: 'text' },
    photoSrc: { control: 'file' },
    stat1: { control: 'text' },
    stat2: { control: 'text' },
    stat3: { control: 'text' },
    stat4: { control: 'text' },
    agilestat: { control: 'text' },
    strengthstat: { control: 'text' },
    speedstat: { control: 'text' },
    endurancestat: { control: 'text' },
  },
};


function TradingCardTemplate({
  name,
  photoSrc,
  stat1,
  stat2,
  stat3,
  stat4,
  agilestat,
  strengthstat,
  speedstat,
  endurancestat,
}) {
  return html`<trading-card
    name="${name}"
    photoSrc="${photoSrc}"
    stat1="${stat1}"
    stat2="${stat2}"
    stat3="${stat3}"
    stat4="${stat4}"
    agilestat="${agilestat}"
    strengthstat="${strengthstat}"
    speedstat="${speedstat}"
    endurancestat="${endurancestat}"
  >
  </trading-card>`;
}


export const Example = TradingCardTemplate.bind({});
Example.args = {
  name: 'Red Panda',
  photoSrc:
    'https://i.pinimg.com/736x/37/d0/15/37d015c63d54580429727063334db15b.jpg',
  stat1: 'Agile',
  stat2: 'Strength',
  stat3: 'Speed',
  stat4: 'Endurance',
  agilestat: '76',
  strengthstat: '65',
  speedstat: '94',
  endurancestat: '80',
};

export const Blank = TradingCardTemplate.bind({});
