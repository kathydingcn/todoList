import React from 'react';

export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ["msg1", "msg2", "msg3"]
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(e) {
        this.setState({ msg: [...this.state.msg, "msg4"] });
    }
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={this.handleAdd}>add</button>

                <ul>
                    {this.state.msg.map(v => { return <li>{v}</li> })}
                </ul>
            </div>
        );
    }
}