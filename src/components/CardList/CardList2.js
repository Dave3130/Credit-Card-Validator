import React from 'react';
import Card from 'react-credit-cards';
import './CardList.css'
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
            number="36** **** **** ****"
            expiry="**/**"
            cvc="***"
          />

          <Card
            name="**** *****"
            number="6250 **** **** ****"
            expiry="**/**"
            cvc="***"
          />

          <Card
            name="**** *****"
            number="6759 **** **** ****"
            expiry="**/**"
            cvc="***"
          />


        </div>
      </div>
    );
  }
}
