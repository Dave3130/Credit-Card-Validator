import React from 'react';
import Card from 'react-credit-cards';
import './CardList2.css'
export default class CardsList2 extends React.Component {
  render() {
    return (
      <div className="App-cards">
        <div className="App-cards-list">
          <Card
            name="**** *****"
            number="37** **** **** ****"
            expiry="**/**"
            cvc="***"
          />
          <Card
            name="**** *****"
            number="6250 **** **** ****"
            expiry="**/**"
            cvc="***"
          />
        </div>
      </div>
    );
  }
}
