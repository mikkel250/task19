import React from 'react';

//Need to actually set the parent to control the state bc we want to not just show the checkbox is checked but change the display prop of the p tag.

const RadioSelect = props => (
    <input type="radio" />
)

class ExampleApp extends React.Component {
    state = { checked: false}

    
    handleChange(event) {
        this.setState({
            selected: event.target.checked
        });
    }

    render() {
        const content = this.state.checked ? null : <span>Can You See Me?</span>;
        return (
            <div>
                <label>
                    <RadioSelect
                        checked={this.state.checked}
                        onChange={this.handleChecboxChange}
                    />
                    
                </label>
                {content}
            </div>
        )
    }
}

export default ExampleApp;