import React from 'react';
import './App.css';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import CardsList1 from './components/CardList/CardList1';
import CardsList2 from './components/CardList/CardList2';
import CardsList3 from './components/CardList/CardList3';

class App extends React.Component {

    constructor(props) {
    super(props);

    this.state = { number: '',
                    name: '',
                    expiry: '',
                    cvc: '',
                    focus: '',
                    result: '',
                    nameError: '',
                    numberError: '',
                    expiryError: '',
                    cvcError: ''
                };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateCard = this.validateCard.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
  };


 handleInputFocus = ({ target }) => {
    this.setState({
      focus: target.name,
    });
  };

 handleInputChange = ({ target }) => {
    if (target.name === 'number') {
        this.validateNumber();
        this.setState({ number: target.value });
    }
    else if (target.name === 'name') {
        this.validateName();
        this.setState({ name: target.value });
    }
    else if (target.name === 'expiry') {
        this.validateExpiry();
        this.setState({ expiry: target.value });

    }
    else if (target.name === 'cvc') {
        this.validateCVC();
        this.setState({ cvc: target.value });

    }
  };


 validateCard = (event) =>{
    event.preventDefault();
     if (this.nameError || this.numberError || this.expiryError || this.cvcError) {
        alert("Please fill all the details correctly!!");
         }
         else{
            let total = 0;
          let numArr = this.state.number.split("");
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

            if(total % 10 === 0 ){
                this.setState({
                    focus: this.number,
                    result: 'Valid Card'
                });
            }
            else{
                this.setState({
                    focus: this.number,
                    result: 'Not a Valid Card'
                });
            }
         }
};

    validateName = () => {
        const { name } = this.state;
        var alpha = /^[A-Za-z]+$/;
        if(name.match(alpha)){
            this.setState({
            nameError:
                name.length < 1 ? 'Name field can\'t be empty' : null
        });
        }
        else{
        this.setState({
            nameError: 'Not a valid name'
       });
      }
      }

    validateNumber = () => {
        const { number } = this.state;
        var num = /^[0-9]+$/;
        if(number.match(num)){
            this.setState({
            numberError:
                number.length < 12 ? 'Number should lie between 12-19 digits depending on the card provider' : null
        });
        }
        else{
        this.setState({
            numberError: 'Only numeric values are allowed'
       });
      }
     }

    validateExpiry = () => {
        const { expiry } = this.state;
        var d = new Date();
        var year = d.getFullYear();
        var num = /^[0-9]+$/;
        if(expiry.match(num)){
            this.setState({
            expiryError:
                expiry.length !== 4 ? 'Specified format "MM/YY" is not satisfied' : Number(expiry.slice(0,2)) > 12 || Number('20' + expiry.slice(2,4)) < year ? 'Invalid Date' : null
        });
        }
        else{
        this.setState({
            expiryError: 'Only numeric values are allowed'
       });
      }
    }

    validateCVC= () => {
        const { cvc } = this.state;
        var num = /^[0-9]+$/;
        if(cvc.match(num)){
            this.setState({
                cvcError:
                    cvc.length < 3 || cvc.length > 4 ? 'CVC should be of 3-4 digits' : null
        });

        }
        else{
        this.setState({
            cvcError: 'Only numeric values are allowed'
       });
      }


    }

    handleRetry = () =>{
        this.setState({ number: '',
                    name: '',
                    expiry: '',
                    cvc: '',
                    focus: '',
                    result: '',
                    nameError: '',
                    numberError: '',
                    expiryError: '',
                    cvcError: ''
         });
    }

    render(){
        const { result } = this.state;
    return (
    <div className="App">
    <h1 className="head">Credit Card Validator</h1>
    <div className="grid-container">
        <div className="grid-1">
            <CardsList1 />
        </div>
        <div className="grid-2">
        <div className="container">
            <Card
                number = {this.state.number}
                name = {this.state.name}
                expiry = {this.state.expiry}
                cvc = {this.state.cvc}
                focused = {this.state.focus}
            />
            <form onSubmit={this.validateCard}>
                <div className="form-group">
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        required
                        maxLength = "19"
                        className= {`form-control ${this.state.numberError ? 'is-invalid' : ''}`}
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateNumber}
                    />
                    <div className='error-msg'>{this.state.numberError}</div>
                </div>
                <div className="name">
                    <input
                        type="text"
                        name="name"
                        className= {`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                        placeholder="Name"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        onBlur={this.validateName}
                    />
                    <div className='invalid-feedback error-msg'>{this.state.nameError}</div>
                </div>
                <div className="expiry">
                  <input
                            className="expiry"
                            type="tel"
                            name="expiry"
                            className= {`form-control ${this.state.expiryError ? 'is-invalid' : ''}`}
                            placeholder="MM/YY Expiry"
                            required
                            value={this.state.expiry}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            onBlur={this.validateExpiry}
                        />
                   <div className='invalid-feedback error-msg'>{this.state.expiryError}</div>
                </div>
                <div className="cvc">
                    <input
                            type="tel"
                            name="cvc"
                            className= {`form-control ${this.state.cvcError ? 'is-invalid' : ''}`}
                            placeholder="CVC"
                            required
                            value={this.state.cvc}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            onBlur={this.validateCVC}
                        />
                    <div className='invalid-feedback error-msg'>{this.state.cvcError}</div>
                </div>
            <button type="submit" className= {result.length > 0 ? 'hide-validate-btn' : 'show-validate-btn'}>Validate</button>
            <p className="result">{result}</p>
            <button className= { result.length > 0 ? 'show-retry-btn' : 'hide-retry-btn'} onClick={this.handleRetry}>Retry</button>

                <h5>Please note that this Webapp does not store any of the credit card details you enter.</h5>
            </form>
         </div>
            <h2 className="supported-card-title text-center">List of supported Card</h2>

            <CardsList3 />
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
