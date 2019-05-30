import React from 'react';

const currencies = {
    usd: 'US Dollar',
    rand: 'South African Rand',
    gbp: 'British Pound',
    eur: 'Euro'
}

// Base currency will always be dollars
function toRand(usd) {
    return (usd * 14.7);
}


function toPound(usd) {
    return (usd * 0.8);
}

function toEuro(usd) {
    return (usd * 0.9);
}

// you pass in the appropriate function for the convert arg, e.g. convertUsd(25, toPound)
function convertUsd(usd, convert) {
    const input = parseFloat(usd);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class CurrencyInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCurrencyChange(e.target.value);
    }

    render() {
        const amount = this.props.amount;
        const currency = this.props.currency;
        return (
            <fieldset>
                <legend>Amount in {currencies[currency]}:</legend>
                <input value={amount}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleDollarChange = this.handleDollarChange.bind(this);
        this.handleRandChange = this.handleRandChange.bind(this);
        this.handlePoundChange = this.handlePoundChange.bind(this);
        this.handleEuroChange = this.handleEuroChange.bind(this);
        this.state = {amount: "", currency: 'usd'}
    }

    handleDollarChange(amount) {
        this.setState({ currency: 'usd', amount });
    }

    handleRandChange(amount) {
        this.setState({ currency: 'rand', amount });
    }

    handlePoundChange(amount) {
        this.setState({ currency: 'gbp', amount });
    }

    handleEuroChange(amount) {
        this.setState({ currency: 'eur', amount });
    }

    render() {
        const amount = this.state.amount;
        const rand = convertUsd(amount, toRand);
        const gbp = convertUsd(amount, toPound);
        const eur = convertUsd(amount, toEuro);

        return (
            <div>
                <CurrencyInput
                    currency="usd"
                    amount={amount}
                    onCurrencyChange={this.handleDollarChange} />
                <CurrencyInput
                    currency="rand"
                    amount={rand}
                    onCurrencyChange={this.handleRandChange} />
                <CurrencyInput
                    currency="gbp"
                    amount={gbp}
                    onCurrencyChange={this.handlePoundChange} />
                <CurrencyInput
                    currency="eur"
                    amount={eur}
                    onCurrencyChange={this.handleEuroChange} />
            </div>
        );

    }
}

export default Calculator;