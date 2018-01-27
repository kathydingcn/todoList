import React from 'react';
export default class DelItemComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return  <button value={this.props.itemId} onClick={this.props.myHandleDel}>X</button>

    }
}
