import React from 'react';

export default class TodoList extends  React.Component {
    constructor(){
        super();
        this.state={msg: ["msg1","msg2","msg3"]};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleAdd(e){
        this.setState({msg: [...this.state.msg, "msg4"]});
    }
    handleInput(e){
        this.setState({msg: [...this.state.msg, e.target.value]});
    }
    handleDel(e){
        console.log(e.target.value);
        // this.state.msg.filter((item, index)=>{return index!=e.target.value});
        this.setState({msg:   this.state.msg.filter((item, index)=>{return index!=e.target.value})});
        // this.setState({msg: });
    }
    render() {
        var i=0;
        return (
            <div>
                <input type="text" onKeyUp={this.handleInput}/>


                <button onClick={this.handleAdd}>add</button>

                <ul>

                    {this.state.msg.map(v=>{return <li>{v}<button onClick={this.handleDel} value={i++}>del</button></li>})}

                </ul>
            </div>
        );
    }
}
