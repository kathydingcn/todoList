import React from 'react';
export default class DoneItemComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  <button value={this.props.itemId} onClick={this.props.myHandleDone}>done?</button>;
    }
}