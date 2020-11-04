import React from 'react';
import Card from 'react-credit-cards';
import './CardList.css'
export default class CardsList1 extends React.Component {
  render() {
    return (
      <div className="App-cards">
        <div className="App-cards-list">

          <Card
            name="******"
            number="4111 **** **** ****"
            expiry="**/**"
            cvc="***"
          />

          <Card
            name="******"
            number="5555 **** **** ****"
            expiry="**/**"
            cvc="***"
          />

          <Card
            name="******"
            number="3528** **** **** ****"
            expiry="**/**"
            cvc="***"
          />
          <Card
            name="**** *****"
            number="6011 **** **** ****"
            expiry="**/**"
            cvc="***"
          />
        </div>
      </div>
    );
  }
}
