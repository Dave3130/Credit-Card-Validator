import React from 'react';
import './App.css';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import CardsList2 from './components/CardList2/CardList2';
import CardsList1 from './components/CardList1/CardList1';


class App extends React.Component {
  
    constructor(props) {
    super(props);
    
    this.state = { number: '', 
                    name: '',
                    expiry: '',
                    cvc: '',
                    focus: ''
                };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateCard = this.validateCard.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
  };
  

 handleInputFocus = ({ target }) => {
    this.setState({
      focus: target.name,
    });
  };

 handleInputChange = ({ target }) => {
    if (target.name === 'number') {
    this.setState({ number: target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()});
    }
    else{
    this.setState({ [target.name]: target.value });
    }
  };


 validateCard = (event) =>{
    event.preventDefault();
     
    var d = new Date(); 
    var month = d.getMonth() + 1; 
    var year = d.getFullYear();
    if(Number(this.state.expiry.slice(0,2)) > 12 || Number('20' + this.state.expiry.slice(2,4)) < year ){
         this.setState({
            focus: this.expiry,
        });
        alert('Expiry Date is Invalid !! Please Enter Valid Date');     
        
    }
    
     else{
      let total = 0;
      let str = this.state.number.split("");
      let numArr= str.filter(num => num.trim().length > 0);
      for (let i = numArr.length - 1; i >= 0; i--) {
        let currValue = Number(numArr[i])
        if ((numArr.length - 1 - i) % 2 === 1) {
          currValue *= 2;
          if (currValue > 9) {
            currValue -= 9;
          }
        }
        total += currValue;
      }

       this.setState({ number: '', 
                        name: '',
                        expiry: '',
                        cvc: '',
                        focus: '' });  

        if(total % 10 === 0 ){
          alert('The Card is Valid');
        }
        else{
            alert('The Card is Not Valid');
        }
     }
     
};  

  
    render(){
    return (
    <div className="App">
    <h1 className="head">Credit Card Validator</h1>
    <div className="grid-container">
        <div className="grid-1">
            <CardsList1 />
        </div>
        <div className="grid-2">
            <Card 
                number = {this.state.number}
                name = {this.state.name}
                expiry = {this.state.expiry}
                cvc = {this.state.cvc}
                focused = {this.state.focus}
            />
            <form onSubmit={this.validateCard}>
                <h5 className="text-bold text-danger">Please note that this Webapp does not store any of the credit card details you enter.</h5>
                <div className="card-number">
                    <input
                        type="tel"
                        name="number"
                        className="form-control"
                        placeholder="Card Number"
                        required
                        maxLength= "16"
                        value={this.state.number} 
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <small>E.g.: 49..., 51..., 36..., 37...</small>
                <div className="name">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={this.state.name} 
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <div className="expiry">
                  <input
                            className="expiry"
                            type="tel"
                            name="expiry"
                            className="form-control"
                            placeholder="MM/YY Expiry"
                            pattern="[\d]{4}"
                            required
                            value={this.state.expiry} 
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />     
                </div>
                <div className="cvc">
                    <input
                            type="tel"
                            name="cvc"
                            className="form-control"
                            placeholder="CVC"
                            maxLength= "4"
                            minLength= "3"
                            required
                            value={this.state.cvc} 
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />    
                </div>
            <button type="submit" className="btn" >Validate</button>
            
            </form>
        </div>
    <div className="grid-3">
    <CardsList2 />
    </div>
    </div>
    </div>
  );
}
}

export default App;
