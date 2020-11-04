import React from 'react';
import Card from 'react-credit-cards';
import './CardList.css'
export default class CardsList3 extends React.Component {
  render() {
    return (
      <div className="App-cards">
        <div className="App-cards-list">

          <Card
            name="******"
            number="60** **** **** ****"
            expiry="**/**"
            cvc="***"
          />

        </div>
      </div>
    );
  }
}
