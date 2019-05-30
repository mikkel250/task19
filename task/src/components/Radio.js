import React from 'react';

function Content(props) {
    if (props.checked) {
        return <span>Can You See Me?</span>;
    }
    return null;
}

class ExampleApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { checked: false}
    }

    handleChange(event) {
        this.setState({
            checked: event.target.value
        });
    }

    render() {
        const selected = this.state.checked;
        
        return (
            <div>                
                <input
                    type="radio"
                    value={selected}
                    onChange={this.handleChange}
                    />                
                <Content checked={selected} />
            </div>
        )
    }
}

export default ExampleApp;