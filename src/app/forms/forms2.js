import React from 'react';
export default class Reservation1 extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            input:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange (e) {
        this.setState({ input: e.target.value });
    }

    handleClick () {
        console.log(this.state.input);
    }

    render (){
        return (
            <div>
                <input type="text" onChange={ this.handleChange } />
                <input
                    type="button"
                    value="Alert the text input"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
};
